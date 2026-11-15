export interface Video {
  id: number;
  title: string;
  date: string;
  preview: string;
  youtubeId: string;
}

// youtubeId — временный ролик, замени на свои
export const VIDEOS: Video[] = [1, 2, 3, 4].map((id) => ({
  id,
  title: "Как работать с документами в Signy, часть " + id,
  date: "05.03.2020",
  preview: "/images/blog-" + id + ".png",
  youtubeId: "M7lc1UVf-VE",
}));
