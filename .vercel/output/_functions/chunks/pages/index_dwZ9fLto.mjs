/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, s as spreadAttributes, j as renderSlot, k as renderComponent, l as renderHead } from '../astro_ZXHzpbql.mjs';
import clsx from 'clsx';
import { format } from 'date-fns';
import { twMerge } from 'tw-merge';

const getEnvVars = () => {
  const apiKey = "C5Np9zibF3VdhJ1q6nxmdFkPsge3HzpPkPQU5bS4";
  return {
    apiKey
  };
};

const apiUrl = "https://api.nasa.gov/planetary/apod";

const $$Astro$7 = createAstro();
const $$SpaceInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SpaceInfo;
  const { apiKey } = getEnvVars();
  const date = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  const res = await fetch(`${apiUrl}?api_key=${apiKey}&date=${date}`, {
    cache: "force-cache"
  });
  const data = await res.json();
  return renderTemplate`${maybeRenderHead()}<div class="rounded-md flex items-center max-w-full flex-col"> <img class="rounded-lg shadow-md shadow-indigo-900"${addAttribute(data.url, "src")}${addAttribute(data.title, "alt")}${addAttribute(450, "width")}${addAttribute(450, "height")}> <h1 class="font-bold md:text-4xl text-center my-9 text-2xl">${data.title}</h1> <p class="pb-3 text-base font-medium">
Date: <span class="text-rose-500">${format(data.date, "do MMM, yy")}</span> </p> <p class="prose mt-3 leading-loose font-mono prose-base max-w-5xl dark:text-zinc-300"> ${data.explanation} </p> </div>
../lib/env.ts../lib/index.ts`;
}, "C:/Users/nilot/OneDrive/Desktop/projects/astro-projects/astro-space-app/src/components/SpaceInfo.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$6 = createAstro();
const $$Seperator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Seperator;
  const { class: styles, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(cn("h-px w-full bg-sky-600", styles), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </span>
../../utils/index.ts`;
}, "C:/Users/nilot/OneDrive/Desktop/projects/astro-projects/astro-space-app/src/components/ui/Seperator.astro", void 0);

const $$Astro$5 = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Container;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("mx-auto max-w-7xl px-3 md:px-6", props.class), "class")}> ${renderSlot($$result, $$slots["default"])} </div>
../../utils/index.ts`;
}, "C:/Users/nilot/OneDrive/Desktop/projects/astro-projects/astro-space-app/src/components/ui/Container.astro", void 0);

const $$Astro$4 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const { variant, size, class: styles, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(cn(
    "btn hover:opacity-85 hover:scale-[0.98] duration-200 font-medium p-4 h-6 px-2.5 dark:bg-white w-fit inline-flex items-center gap-1.5 text-sm dark:text-gray-900 transition-all text-white rounded-md bg-gray-900",
    {
      "dark:text-white text-white bg-rose-600 dark:bg-rose-600": variant === "danger",
      "dark:bg-inherit bg-inherit text-black dark:text-white dark:hover:bg-zinc-900 hover:bg-gray-200": variant === "ghost",
      "p-1.5 px-1.5 text-xs": size === "sm",
      "py-4 text-base h-9 px-3": size === "lg"
    },
    styles
  ), "class")}${spreadAttributes(props)}>${renderSlot($$result, $$slots["default"])}</button>
../../utils/index.ts`;
}, "C:/Users/nilot/OneDrive/Desktop/projects/astro-projects/astro-space-app/src/components/ui/Button.astro", void 0);

const $$Astro$3 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`   ${maybeRenderHead()}<nav class="top-0 left-0 dark:bg-black/80 mb-6 backdrop-blur-md sticky my-auto border-b-[1px] dark:border-zinc-800"> ${renderComponent($$result, "Container", $$Container, { "class": "h-16 flex justify-between items-center w-full" }, { "default": ($$result2) => renderTemplate` <a href="/" class="text-lg md:text-2xl -space-x-1.5 cursor-pointer font-bold"> <span class="text-transparent bg-gradient-to-r from-sky-400 bg-clip-text to-blue-400">Space</span> <span class="text-transparent bg-gradient-to-r to-pink-500 bg-clip-text from-purple-400">Insider</span></a> <ul class="items-center gap-9 font-medium hidden sm:flex"> <a id="nav" href="/" class="hover:text-sky-400 hover:underline cursor-pointer">Home</a> <a id="nav" href="/about" class="hover:text-sky-400 hover:underline cursor-pointer">About</a> </ul> <div class="sm:hidden"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line> </svg> </div> ${renderComponent($$result2, "Button", $$Button, { "id": "toggle", "class": "capitalize hidden sm:inline-flex" })} ` })} </nav>`;
}, "C:/Users/nilot/OneDrive/Desktop/projects/astro-projects/astro-space-app/src/components/Nav.astro", void 0);

const $$Astro$2 = createAstro();
const $$GradiantBlob = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GradiantBlob;
  return renderTemplate`${maybeRenderHead()}<section aria-hidden="true" class="absolute left-1/2 top-44 -z-20 flex w-auto -translate-x-1/2 rotate-90 items-center justify-center gap-20 overflow-hidden opacity-30 blur-2xl dark:blur-3xl xs:opacity-40 sm:top-32 sm:rotate-0 sm:gap-0 sm:opacity-20 dark:md:opacity-20"> <div class="flex flex-col gap-4 sm:gap-8"> <div class="h-40 w-40 rounded-full bg-gradient-to-r from-purple-500 to-red-500 sm:h-64 sm:w-52 lg:h-64 lg:w-64"></div> <div class="h-40 w-40 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 sm:h-64 sm:w-52 lg:h-64 lg:w-64"></div> </div> <div class="flex flex-col gap-4 sm:gap-8"> <div class="h-40 w-40 rounded-full bg-gradient-to-r from-yellow-500 to-green-500 sm:h-64 sm:w-52 lg:h-64 lg:w-64"></div> <div class="h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 sm:h-64 sm:w-52 lg:h-64 lg:w-64"></div> </div> </section>`;
}, "C:/Users/nilot/OneDrive/Desktop/projects/astro-projects/astro-space-app/src/components/GradiantBlob.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate(_a || (_a = __template([`<script>
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return JSON.parse(localStorage.getItem('theme'));
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  })();

  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
  window.localStorage.setItem('theme', JSON.stringify(theme));
<\/script> <html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"`, "><title>Astro</title>", '</head> <body class="antialiased mb-16 transition-colors duration-300 dark:bg-black dark:text-zinc-200 min-h-screen w-full font-sans"> ', " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "GradiantBlob", $$GradiantBlob, {}), renderComponent($$result, "Nav", $$Nav, {}), renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` }));
}, "C:/Users/nilot/OneDrive/Desktop/projects/astro-projects/astro-space-app/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center w-full justify-center flex-col space-y-6"> <h2 class="text-3xl md:text-4xl font-bold">Today's Astro Pic</h2> ${renderComponent($$result2, "Seperator", $$Seperator, { "class": "w-24" })} ${renderComponent($$result2, "SpaceInfo", $$SpaceInfo, {})} </div> ` })}`;
}, "C:/Users/nilot/OneDrive/Desktop/projects/astro-projects/astro-space-app/src/pages/index.astro", void 0);

const $$file = "C:/Users/nilot/OneDrive/Desktop/projects/astro-projects/astro-space-app/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Seperator as $, $$MainLayout as a, index as i };
