export interface FileUploader {
  onChange(e: File): void;
  data: File | undefined
}