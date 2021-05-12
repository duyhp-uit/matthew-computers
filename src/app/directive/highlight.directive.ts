import { Directive, Input, SimpleChanges, Renderer2, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() searchedWord: string;
  @Input() content: string;
  @Input() classToApply: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.content) {
      return;
    }

    if (!this.searchedWord || !this.searchedWord.length || !this.classToApply) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.content);
      return;
    }

    let searchWordArray = this.searchedWord.split(' ');
    this.renderer.setProperty(
        this.el.nativeElement,
        'innerHTML',
        this.getFormattedText(searchWordArray)
        );
    
  }

  getFormattedText(searchWordArray: string[]) {
    const re = new RegExp(`(${ searchWordArray.join('|') })`, 'gi');
    return this.content.replace(re, `<span class="${this.classToApply}">$1</span>`);
  }
}