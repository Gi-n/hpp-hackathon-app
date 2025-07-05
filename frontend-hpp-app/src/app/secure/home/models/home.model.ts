export interface HomeButtons {
  contactBtn: string;
  aboutUsBtn: string;
  contactUsBtnAnalytics: string;
  aboutUsBtnAnalytics: string;
}

export interface FeaturedPost {
  category: string;
  categoryClass: string;
  title: string;
  date: string;
  text: string;
  link: string;
  thumbnail: string;
}

export interface HomeContent {
  header: {
    title: string;
    subtitle: string;
    buttons: HomeButtons;
  };
  featuredPosts: FeaturedPost[];
}