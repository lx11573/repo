declare namespace Uv {
  interface Inst {
    Modal: {
      open: () => void
      close: () => void
    }
    Form: {
      validate: (callback?: (isValid: boolean, invalidFields: object) => void) => void
      resetFields: () => void
      clearValidate: (props?: string | string[]) => void
    }
  }
  interface ChooseFile {
    type: 'image' | 'media' | 'file' | 'video'
    url: string
    thumb: string
    size: number
  }
  interface ChooseFileEvent {
    file: ChooseFile
    name: string
    index: number
  }
}
