export interface ModalConfig {
    modalTitle: string
    closeButtonLabel: string
    shouldClose?(): Promise<boolean> | boolean
    shouldDismiss?(): Promise<boolean> | boolean
    onClose?(): Promise<boolean> | boolean
    disableCloseButton?(): boolean
    hideCloseButton?(): boolean
  
}
