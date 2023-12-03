import { defineConfigWithTheme } from "vitepress";
import { ThemeConfig } from "./theme/ThemeConfig";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
    title: "Kostiantyn Rudenko",
    description: "personal website",
    srcDir: "./pages",
    themeConfig: {
        nav: [
            { title: "About me", url: "/about/" },
            {
                title: "My projects",
                url: "/projects/",
            },
            { title: "Papers", url: "/Papers" },
            {
                title: "For students",
                url: "/students",
                children: [
                    {
                        title: "HTML",
                        url: "/students/HTML",
                        children: [
                            {
                                title: "dummy page 1",
                                url: "/students/HTML/dummy1",
                            },
                            {
                                title: "dummy page 2",
                                url: "/students/HTML/dummy2",
                            },
                            {
                                title: "dummy page 3",
                                url: "/students/HTML/dummy3",
                            },
                            {
                                title: "dummy page 4",
                                url: "/students/HTML/dummy4",
                            },
                        ],
                    },
                    {
                        title: "CSS",
                        url: "/students/CSS",
                        children: [
                            {
                                title: "dummy page 1",
                                url: "/students/CSS/dummy1",
                            },
                            {
                                title: "dummy page 2",
                                url: "/students/CSS/dummy2",
                            },
                            {
                                title: "dummy page 3",
                                url: "/students/CSS/dummy3",
                            },
                            {
                                title: "dummy page 4",
                                url: "/students/CSS/dummy4",
                            },
                        ],
                    },
                ],
            },
            { title: "Blog", url: "/blog" },
        ],
    },
});
