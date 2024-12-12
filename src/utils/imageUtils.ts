export const getGoogleDriveImageUrl = (fileId: string): string => {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

export const isGoogleDriveUrl = (url: string): boolean => {
  return url.includes('drive.google.com');
};

export const parseGoogleDriveFileId = (url: string): string | null => {
  // Handle different Google Drive URL formats
  const patterns = [
    /\/d\/([a-zA-Z0-9_-]+)/,  // Format: /d/fileId
    /id=([a-zA-Z0-9_-]+)/,    // Format: id=fileId
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

export const processImageUrl = (url: string): string => {
  if (isGoogleDriveUrl(url)) {
    const fileId = parseGoogleDriveFileId(url);
    if (fileId) {
      return getGoogleDriveImageUrl(fileId);
    }
  }
  return url;
};