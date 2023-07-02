import { ElementRef } from "@angular/core"

export interface IOverlay {
    teardown: () => void
}

export interface IOverlayInitData{
    baseElement: ElementRef,
    focusTrapElements: ElementRef[], // focus trap elements need to be provided in dom order
    focusElement?: HTMLElement,
    focusElementSelector?: string
}
