import { FileText, FolderOpen, Github, Images, Linkedin, MessageCircle, Send, Terminal, User, Youtube } from "lucide-react";

/** Keyed by `mobileApps[].id`. */
const APP_ICONS = {
    projects: FolderOpen,
    skills: Terminal,
    resume: FileText,
    contact: MessageCircle,
    about: User,
    gallery: Images,
};

/** Keyed by `socials[].text`. */
const SOCIAL_ICONS = {
    Github,
    Telegram: Send,
    Youtube,
    LinkedIn: Linkedin,
};

export { APP_ICONS, SOCIAL_ICONS };
