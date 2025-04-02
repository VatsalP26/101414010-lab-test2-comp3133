import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser'; 
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { readFileSync } from 'fs';

const FALLBACK_HTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>101414010 Lab Test 2 - COMP3133</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
`;

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');

  const isProduction = process.env['NODE_ENV'] === 'production';
  let indexHtml: string;
  try {
    const indexHtmlPath = isProduction
      ? join(browserDistFolder, 'index.html')
      : join(process.cwd(), 'src', 'index.html');
    indexHtml = readFileSync(indexHtmlPath, 'utf-8');
    console.log('Loaded index.html:', indexHtml); 
  } catch (error) {
    console.error('Failed to load index.html, using fallback:', error);
    indexHtml = FALLBACK_HTML;
  }

  if (!indexHtml.includes('<app-root>')) {
    console.error('index.html does not contain <app-root>. Using fallback HTML.');
    indexHtml = FALLBACK_HTML;
  }

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  server.get(
    '**/*.*',
    express.static(isProduction ? browserDistFolder : join(process.cwd(), 'src'), {
      maxAge: '1y',
      index: false,
    }),
  );

  server.get('**', async (req, res) => {
    try {
      const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
      console.log('Rendering URL:', url);
      const bootstrap = () => bootstrapApplication(AppComponent, config);
      const html: string = await renderApplication(bootstrap, {
        url,
        document: indexHtml
      });
      console.log('Rendered HTML:', html); 
      res.send(html);
    } catch (err: unknown) {
      console.error('SSR Error:', err); 
      res.status(500).send((err as Error).message || 'Internal Server Error');
    }
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();

export default app;