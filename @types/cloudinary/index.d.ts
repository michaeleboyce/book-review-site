declare module 'cloudinary' {
    function config(obj: any): void
    const uploader: Uploader
    interface Uploader {
      upload: (path: string) => Array<Promise<any>>
    }
}