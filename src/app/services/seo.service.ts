import {Injectable} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';

@Injectable()
export class SeoService {
    /**
     * Angular 2 Title Service
     */
    private titleService: Title;
    /**
     * <head> Element of the HTML document
     */
    private headElement: HTMLElement;
    /**
     * <meta name="description"> Element of the document head
     */
    private metaDescription: HTMLElement;
    /**
     * <meta name="robots"> Element of the document head
     */
    private robots: HTMLElement;

    /**
     * Inject the Angular 2 Title Service
     * @param titleService
     */
    constructor(titleService: Title) {
        this.titleService = titleService;

        /**
         * get the <head> Element
         * @type {any}
         */
        this.headElement = DOM.query('head');

        this.metaDescription = this.getOrCreateMetaElement('description');
        this.robots = this.getOrCreateMetaElement('robots');
    }

    public getTitle(): string {
        return this.titleService.getTitle();
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    public getMetaDescription(): string {
        return this.metaDescription.getAttribute('content');
    }

    public setMetaDescription(description: string) {
        this.metaDescription.setAttribute('content', description);
    }

    public getMetaRotbos(): string {
        return this.robots.getAttribute('content');
    }

    public setMetaRotbos(robots: string) {
        this.robots.setAttribute('content', robots);
    }

    /**
     * get the HTML Element when it is in the markup, or create it.
     * @param name
     * @returns {HTMLElement}
     */
    private getOrCreateMetaElement(name: string): HTMLElement {
        let el: HTMLElement;
        el = DOM.query('meta[name=' + name + ']');
        if (el === null) {
            el = DOM.createElement('meta');
            el.setAttribute('name', name);
            this.headElement.appendChild(el);
        }
        return el;
    }
}
