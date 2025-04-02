import { bootstrapApplication } from '@angular/platform-browser';
import { renderApplication } from '@angular/platform-server';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

export default async function render(url: string, document: string) {
  const bootstrap = () => bootstrapApplication(AppComponent, config);
  const html = await renderApplication(bootstrap, {
    url,
    document
  });
  return html;
}