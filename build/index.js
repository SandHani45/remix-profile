var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default
});
var import_remix = require("@vercel/remix"), import_react = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function entry_server_default(request, responseStatusCode, responseHeaders, remixContext) {
  let remixServer = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 11,
    columnNumber: 23
  }, this);
  return responseHeaders.set("Content-Type", "text/html"), (0, import_remix.handleRequest)(
    request,
    responseStatusCode,
    responseHeaders,
    remixServer
  );
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react8 = require("@remix-run/react"), import_node = require("@remix-run/node");

// app/components/AppFooter.tsx
var import_react2 = require("@remix-run/react");

// app/config/constants.ts
var SITE_AUTHOR = "Sandhani Shaik", SITE_DESCRIPTION = `The online portfolio of ${SITE_AUTHOR}, A Senior Software Engineer! \u{1F1E6}\u{1F1EA}`, SITE_EMAIL_ADDRESS = "matthew.scholta@gmail.com", SITE_EMAIL_LINK = `mailto:${SITE_EMAIL_ADDRESS}`;
var SITE_SHARE_IMAGE = "/images/assets/share.jpg", SITE_TITLE = `${SITE_AUTHOR} - A Senior Software Engineer \u{1F1E6}\u{1F1EA}`, SITE_UPDATED = /* @__PURE__ */ new Date("2023-01-30"), SITE_URL = "https://mattscholta.com", SITE_YEAR = (/* @__PURE__ */ new Date()).getFullYear(), SOCIAL_GITHUB = "https://github.com/SandHani45", SOCIAL_LINKEDIN = "https://www.linkedin.com/in/sandhani-sheikh-full-stack-developer-8bb76aa4/", SOCIAL_TWITTER = "https://twitter.com/visormatt";

// app/components/AppFooter.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), AppFooter = () => {
  let { pathname } = (0, import_react2.useLocation)();
  return pathname.startsWith("/resume") ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "justify-center gap-2 text-center text-sm print:hidden md:mt-20 bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-auto flex justify-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "a",
        {
          className: "p-2",
          href: SOCIAL_LINKEDIN,
          target: "_blank",
          rel: "noreferrer",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "img",
            {
              alt: "Follow me on LinkedIn",
              className: "footer-social",
              height: 16,
              loading: "lazy",
              src: "/images/svg/linkedin-dark.svg",
              width: 16
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppFooter.tsx",
              lineNumber: 27,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/AppFooter.tsx",
          lineNumber: 21,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "a",
        {
          className: "p-2",
          href: SOCIAL_GITHUB,
          target: "_blank",
          rel: "noreferrer",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "img",
            {
              alt: "Follow me on GitHub",
              className: "footer-social",
              height: 16,
              loading: "lazy",
              src: "/images/svg/github-dark.svg",
              width: 16
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppFooter.tsx",
              lineNumber: 42,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/AppFooter.tsx",
          lineNumber: 36,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/AppFooter.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-font-monospace", children: [
      "Built with ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-color-primary--", children: "\u2665" }, void 0, !1, {
        fileName: "app/components/AppFooter.tsx",
        lineNumber: 53,
        columnNumber: 20
      }, this),
      " in",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "a",
        {
          href: "https://www.google.com/search?q=san+diego+weather",
          rel: "noreferrer",
          target: "_blank",
          children: "Dubai \u{1F1E6}\u{1F1EA}"
        },
        void 0,
        !1,
        {
          fileName: "app/components/AppFooter.tsx",
          lineNumber: 54,
          columnNumber: 9
        },
        this
      ),
      ", UAE."
    ] }, void 0, !0, {
      fileName: "app/components/AppFooter.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AppFooter.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};

// app/config/settings.server.ts
var BASE_URL = process.env.BASE_URL ?? "__undefined__", GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS ?? "__undefined__", GOOGLE_TAG_MANAGER = process.env.GOOGLE_TAG_MANAGER ?? "__undefined__", GRAPHCMS_ADMIN = process.env.GRAPHCMS_ADMIN ?? "__undefined__", GRAPHCMS_TOKEN = process.env.GRAPHCMS_TOKEN ?? "__undefined__", GRAPHCMS_URL = process.env.GRAPHCMS_URL ?? "__undefined__";

// app/components/AppHeader.tsx
var import_react3 = require("@remix-run/react"), import_classnames = __toESM(require("classnames")), import_react4 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), AppHeader = () => {
  let [closed, setClosed] = (0, import_react4.useState)(!0), onClose = () => {
    setClosed(!0);
  }, onToggle = () => {
    setClosed(!closed);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "header",
    {
      className: (0, import_classnames.default)(
        "border-none md:block bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100",
        { closed }
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto flex h-full w-full max-w-5xl items-center justify-evenly md:text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "button",
          {
            className: "header-logo ml-4 gap-2 px-4 md:hidden",
            onClick: onToggle,
            title: "Toggle menu",
            type: "button",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "img",
              {
                alt: "Toggle Menu",
                className: "max-h-4",
                height: 16,
                loading: "eager",
                src: "/images/svg/menu.svg",
                width: 19
              },
              void 0,
              !1,
              {
                fileName: "app/components/AppHeader.tsx",
                lineNumber: 34,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 28,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1 md:hidden" }, void 0, !1, {
          fileName: "app/components/AppHeader.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.NavLink, { className: "header-logo ml-4 gap-2 px-4", to: "/", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Home" }, void 0, !1, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 46,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "px-3 text-3xl md:text-1xl font-bold text-black ", style: {
            fontFamily: '"Dancing Script", cursive'
          }, children: "<> Shaik </>" }, void 0, !1, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 47,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/AppHeader.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1" }, void 0, !1, {
          fileName: "app/components/AppHeader.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "flex h-full flex-col font-font-monospace md:flex-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_react3.NavLink,
            {
              className: "header-link",
              onClick: onClose,
              prefetch: "intent",
              to: "/",
              children: "About"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 55,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_react3.NavLink,
            {
              className: "header-link",
              onClick: onClose,
              prefetch: "intent",
              to: "/portfolio",
              children: "Portfolio"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 71,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_react3.NavLink,
            {
              className: "header-link",
              onClick: onClose,
              prefetch: "intent",
              to: "/resume",
              children: "Resume"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 79,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_react3.NavLink,
            {
              className: "header-link",
              onClick: onClose,
              prefetch: "intent",
              to: "/uses",
              children: "Uses"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 92,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AppHeader.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/AppHeader.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/AppHeader.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
};

// app/components/AppHeaderMobile.tsx
var import_react5 = require("@remix-run/react"), import_classnames3 = __toESM(require("classnames")), import_react6 = require("react");

// app/components/AppLogo.tsx
var import_classnames2 = __toESM(require("classnames")), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), AppLogo = (props) => {
  let { className = "", fill = "", height = 59 } = props, cssComponent = (0, import_classnames2.default)("logo", className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "svg",
    {
      className: cssComponent,
      height,
      viewBox: "0 0 100 59",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "path",
        {
          d: "m72.573561 53.8100014-4.7761176-10.8100014-4.7761176 10.8100014h-5.2238824-5.2238824l-4.7761176-10.8100014-4.7761176 10.8100014h-18.9984302l23.7745478-53.8100014 10 22.6334489 10-22.6334489 23.7745479 53.8100014zm-65.46601601-32.0470011 9.61541491-21.7630003h2.8056379l-11.01823389 24.9380633zm2.7140959 6.5404709 12.50515171-28.3034712h3.8379913l-14.4241473 32.6468202zm18.90131901-28.3034712h15.8490314l-23.7745479 53.8100014-4-9.0533796 19.7745479-44.7566218zm0 0h5.441824l-18.5541552 41.9944523-2.7209119-6.1583623zm-23.36631575 14.1239332-5.35664415-12.1239332h10.7132883z",
          fill,
          textRendering: "geometricPrecision",
          renderingIntent: "geometricPrecision"
        },
        void 0,
        !1,
        {
          fileName: "app/components/AppLogo.tsx",
          lineNumber: 23,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/AppLogo.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
};

// app/components/AppHeaderMobile.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), AppHeaderMobile = () => {
  let [closed, setClosed] = (0, import_react6.useState)(!0), onClose = () => {
    setClosed(!0);
  }, onToggle = () => {
    setClosed(!closed);
  }, renderNavigation = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { className: "mt-14 flex flex-col items-center gap-4 md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.NavLink, { className: "header-link", onClick: onClose, to: "/", children: "About" }, void 0, !1, {
      fileName: "app/components/AppHeaderMobile.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.NavLink, { className: "header-link", onClick: onClose, to: "/portfolio", children: "Portfolio" }, void 0, !1, {
      fileName: "app/components/AppHeaderMobile.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.NavLink, { className: "header-link", onClick: onClose, to: "/resume", children: "Resume" }, void 0, !1, {
      fileName: "app/components/AppHeaderMobile.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.NavLink, { className: "header-link", onClick: onClose, to: "/uses", children: "Uses" }, void 0, !1, {
      fileName: "app/components/AppHeaderMobile.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AppHeaderMobile.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "header",
    {
      className: (0, import_classnames3.default)("header overflow-hidden print:hidden md:hidden", {
        closed
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex h-14 w-full items-center md:text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "button",
            {
              className: "header-logo ml-2 h-full gap-2 px-4 md:hidden",
              onClick: onToggle,
              title: "Toggle menu",
              type: "button",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "img",
                {
                  alt: "Toggle Menu",
                  className: "max-h-4",
                  height: 16,
                  loading: "eager",
                  src: "/images/svg/menu.svg",
                  width: 19
                },
                void 0,
                !1,
                {
                  fileName: "app/components/AppHeaderMobile.tsx",
                  lineNumber: 61,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppHeaderMobile.tsx",
              lineNumber: 55,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1 md:hidden" }, void 0, !1, {
            fileName: "app/components/AppHeaderMobile.tsx",
            lineNumber: 70,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_react5.NavLink,
            {
              className: "header-logo ml-4 flex h-full items-center gap-2 px-4",
              to: "/",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AppLogo, { className: "h-full" }, void 0, !1, {
                  fileName: "app/components/AppHeaderMobile.tsx",
                  lineNumber: 76,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "Home" }, void 0, !1, {
                  fileName: "app/components/AppHeaderMobile.tsx",
                  lineNumber: 77,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/AppHeaderMobile.tsx",
              lineNumber: 72,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1 pl-20" }, void 0, !1, {
            fileName: "app/components/AppHeaderMobile.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/AppHeaderMobile.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-full font-font-monospace md:flex-row", children: !closed && renderNavigation() }, void 0, !1, {
          fileName: "app/components/AppHeaderMobile.tsx",
          lineNumber: 83,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/AppHeaderMobile.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
};

// app/hooks/useIntro.ts
var React = __toESM(require("react"));
var useIntro = () => {
  let styleContact = "color: default; font-size: 14px;", styleMessage = "color: #f00; font-size: 18px;", strContact = `%c
  Well, since you've taken the time to read this shoot me an email and lets talk!

  -----------------------------------------------------

  ${SITE_AUTHOR}
  ${SITE_EMAIL_ADDRESS}

  - Github: ${SOCIAL_GITHUB}
  - LinkedIn: ${SOCIAL_LINKEDIN}
  - Twitter: ${SOCIAL_TWITTER}  

  `;
  React.useEffect(() => {
    console.group("\u{1F440} Thank you for looking, lets connect!"), console.log(`%c
\u{1F44B} What can I help you build?`, styleMessage), console.log(strContact, styleContact), console.groupEnd();
  }, []);
};

// app/hooks/usePageTracking.ts
var React2 = __toESM(require("react")), import_react7 = require("@remix-run/react");
var usePageTracking = () => {
  let { pathname } = (0, import_react7.useLocation)();
  React2.useEffect(() => {
    window.gtag && window.gtag("event", "page_view", {
      page_location: `${BASE_URL}${pathname}`
    });
  }, [pathname]);
};

// app/styles/index.css
var styles_default = "/build/_assets/index-VEIN3BVX.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-33C6VANE.css";

// app/root.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: styles_default }
], loader = async (args) => {
  let { request } = args, baseUrl = BASE_URL, canonical = request.url, header = request.headers.get("cookie");
  return (0, import_node.json)({ baseUrl, canonical });
}, meta = (args) => [
  {
    title: SITE_TITLE
  },
  {
    name: "description",
    content: args.data.description
  },
  {
    name: "image",
    content: `${SITE_URL}${SITE_SHARE_IMAGE}`
  },
  {
    tagName: "link",
    rel: "canonical",
    href: args.data.canonical
  }
  // ...getMetaData({
  //   canonical: args.data?.canonical,
  // })
];
function App() {
  let data2 = (0, import_react8.useLoaderData)(), { canonical } = data2, favicon = "/images/svg/logo.svg", manifest = "/manifest.json";
  return useIntro(), usePageTracking(), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: canonical, rel: "canonical" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "apple-touch-icon", sizes: "48x48" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "favicon" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "icon", type: "image/svg+xml" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "mask-icon", type: "image/svg+xml" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: manifest, rel: "manifest" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { className: "bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AppHeader, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AppHeaderMobile, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AppFooter, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

// app/routes/sandbox_.css-polaroid.tsx
var sandbox_css_polaroid_exports = {};
__export(sandbox_css_polaroid_exports, {
  default: () => sandbox_css_polaroid_default,
  meta: () => meta2
});

// app/components/AppHero.tsx
var import_classnames4 = __toESM(require("classnames")), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), AppHero = (props) => {
  let { className, copy, highlight, tag: Tag = "h2" } = props, cssComponent = (0, import_classnames4.default)("hero p-4 text-center", className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: cssComponent, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Tag, { className: "inline-block font-font-serif text-xl font-extrabold md:text-4xl", children: [
    copy && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "font-font-monospace text-base font-normal md:text-2xl", children: copy }, void 0, !1, {
      fileName: "app/components/AppHero.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-highlight px-3 text-4xl md:text-7xl", children: highlight }, void 0, !1, {
      fileName: "app/components/AppHero.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AppHero.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/AppHero.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};

// app/components/SandboxSidebar.tsx
var import_classnames5 = __toESM(require("classnames")), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), SandboxSidebar = (props) => {
  let { className } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: (0, import_classnames5.default)("p-4", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "\u{1F517} Sandbox Sidebar" }, void 0, !1, {
    fileName: "app/components/SandboxSidebar.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SandboxSidebar.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
};

// app/routes/sandbox_.css-polaroid.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), meta2 = (args) => [
  {
    title: `Sandbox | ${SITE_TITLE}`
  },
  {
    description: "A Sandbox project making a Poloroid camera with CSS."
  }
  // {
  //   canonical: args.parentsData?.root?.canonical
  // }
  // ...getMetaData({})
], sandbox_css_polaroid_default = () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "bg-gradient-dark-- bg-color-background-dark text-color-background", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    AppHero,
    {
      className: "mx-auto max-w-6xl py-20 md:py-40",
      copy: "Looked like a fun challenge",
      highlight: "CSS Polaroid Camera",
      tag: "h1"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/sandbox_.css-polaroid.tsx",
      lineNumber: 24,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex bg-white text-gray-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "div",
      {
        className: "relative mx-auto bg-slate-500",
        style: {
          backgroundImage: 'url("/images/sandbox/css-polaroid.jpg")',
          backgroundPosition: "bottom right",
          height: "550px",
          width: "650px"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "ml-20 mr-20 mt-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { children: "Sandboxes" }, void 0, !1, {
          fileName: "app/routes/sandbox_.css-polaroid.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/sandbox_.css-polaroid.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/sandbox_.css-polaroid.tsx",
        lineNumber: 33,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/sandbox_.css-polaroid.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SandboxSidebar, {}, void 0, !1, {
      fileName: "app/routes/sandbox_.css-polaroid.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sandbox_.css-polaroid.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/sandbox_.css-polaroid.tsx",
  lineNumber: 23,
  columnNumber: 5
}, this);

// app/routes/api.portfolio.$slug.ts
var api_portfolio_slug_exports = {};
__export(api_portfolio_slug_exports, {
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");

// app/utils/graphcms.ts
var fetchFromGraphCMS = async (query, variables) => {
  let body = { query };
  return variables && (body.variables = variables), fetch(GRAPHCMS_URL, {
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${GRAPHCMS_TOKEN}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });
}, gql = String.raw;

// app/queries/getPortfolio.ts
var getPortfolioBySlug = gql`
  query portfolios($slug: String!) {
    portfolios(where: { slug: $slug }) {
      company
      content {
        html
      }
      description
      id
      images {
        url
      }
      intro
      slug
      title
    }
  }
`;

// app/routes/api.portfolio.$slug.ts
var loader2 = async (args) => {
  let { slug } = args.params, portfolios = (await (await fetchFromGraphCMS(getPortfolioBySlug, { slug })).json()).data.portfolios ?? [];
  if (portfolios.length !== 1)
    throw new Response(`Portfolio "${slug}" not found`, { status: 404 });
  return (0, import_node2.json)(portfolios[0]);
};

// app/routes/portfolio_.$slug.tsx
var portfolio_slug_exports = {};
__export(portfolio_slug_exports, {
  default: () => portfolio_slug_default,
  loader: () => loader2,
  meta: () => meta3
});
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
var meta3 = (args) => {
  let image = args.data?.images[0] ? args.data?.images[0]?.url : !1;
  return [
    // getMetaData({
    //   canonical: args.parentsData?.root?.canonical,
    //   image,
    // })
    {
      description: args.data?.description
    },
    { title: args.data?.title }
  ];
};
function portfolio_slug_default() {
  let data2 = (0, import_react9.useLoaderData)(), img = data2.images[0] ? data2.images[0]?.url : !1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "m-auto max-w-3xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      AppHero,
      {
        className: "py-20 md:py-40",
        copy: data2.company,
        highlight: data2.title,
        tag: "h1"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/portfolio_.$slug.tsx",
        lineNumber: 34,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/portfolio_.$slug.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    img && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "img",
      {
        alt: data2.title,
        className: "mb-20 mt-0 w-full border-b border-t border-color-border",
        height: "auto",
        loading: "eager",
        src: img,
        style: { aspectRatio: "2/1" },
        width: "100%"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/portfolio_.$slug.tsx",
        lineNumber: 43,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative m-auto flex max-w-3xl flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "div",
      {
        className: "wysiwyg px-4",
        dangerouslySetInnerHTML: { __html: data2.content.html }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/portfolio_.$slug.tsx",
        lineNumber: 54,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/portfolio_.$slug.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative m-auto mb-20 flex max-w-3xl flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("blockquote", { children: data2.intro }, void 0, !1, {
      fileName: "app/routes/portfolio_.$slug.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/portfolio_.$slug.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/portfolio_.$slug.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/api.blog.$slug.ts
var api_blog_slug_exports = {};
__export(api_blog_slug_exports, {
  loader: () => loader3
});
var import_node3 = require("@remix-run/node");

// app/queries/getPost.ts
var getPost = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      content {
        html
        raw
      }
      createdAt
      date
      description
      images {
        url
      }
      imageTemp
      intro
      tags
      title
      updatedAt
    }
  }
`;

// app/routes/api.blog.$slug.ts
var loader3 = async (args) => {
  let { slug } = args.params, res = await (await fetchFromGraphCMS(getPost, { slug })).json();
  if (!res.data.post)
    throw new Response(`Post "${slug}" not found`, { status: 404 });
  return (0, import_node3.json)(res.data.post);
};

// app/routes/[sitemap.xml].tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader4
});

// app/queries/getSitemap.ts
var getSitemap = gql`
  query {
    # Query enum values - https://graphcms.com/docs/api-reference/schema/enumerations
    __type(name: "Tags") {
      enumValues {
        name
      }
    }

    portfolios(orderBy: date_DESC) {
      # company
      # current
      date
      # description
      # images {
      #   url
      # }
      # overview
      slug
      # thumbnailTemp
      title
    }

    posts(orderBy: createdAt_ASC) {
      # content {
      #   html
      # }
      date
      # description
      # id
      # imageTemp
      # intro
      slug
      # tags
      # sticky
      title
    }
  }
`;

// app/routes/[sitemap.xml].tsx
var loader4 = async (args) => {
  let res = await (await fetchFromGraphCMS(getSitemap)).json(), routes2 = ["/blog", "/portfolio", "/resume", "/uses"], { portfolios, posts } = res.data, links4 = routes2.map(
    (path) => `  <url>
    <changefreq>monthly</changefreq>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${SITE_UPDATED.toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>`
  ), blog = posts.map(
    (p) => `  <url>
    <changefreq>monthly</changefreq>
    <loc>${BASE_URL}/blog/${p.slug}</loc>
    <lastmod>${new Date(p.date).toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`
  ), portfolio = portfolios.map(
    (p) => `  <url>
    <changefreq>monthly</changefreq>
    <loc>${BASE_URL}/portfolio/${p.slug}</loc>
    <lastmod>${new Date(p.date).toISOString()}</lastmod>
    <priority>0.9</priority>
  </url>`
  ), content = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <changefreq>monthly</changefreq>
    <loc>${BASE_URL}</loc>
    <lastmod>${SITE_UPDATED.toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>
  ${links4.join(`
`)}
  ${portfolio.join(`
`)}
  ${blog.join(`
`)}
</urlset>`;
  return new Response(content, {
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8"
    },
    status: 200
  });
};

// app/routes/api.portfolio.ts
var api_portfolio_exports = {};
__export(api_portfolio_exports, {
  loader: () => loader5
});

// app/queries/getPortfolios.ts
var getPortfolios = gql`
  query {
    portfolios(orderBy: date_DESC) {
      company
      current
      date
      description
      images {
        url
      }
      overview
      slug
      thumbnailTemp
      title
    }
  }
`;

// app/routes/api.portfolio.ts
var import_node4 = require("@remix-run/node"), loader5 = async (args) => {
  let items = (await (await fetchFromGraphCMS(getPortfolios)).json()).data.portfolios ?? [];
  if (!items.length)
    throw new Response("Portfolio items not found", { status: 404 });
  return (0, import_node4.json)(items);
};

// app/routes/api.qualities.ts
var api_qualities_exports = {};
__export(api_qualities_exports, {
  getQuote: () => getQuote,
  loader: () => loader6
});
var qualities = [
  "A problem solver \u{1F9E9}",
  "A creative thinker \u{1F914}",
  "A team player \u{1F91D}",
  "A father and husband \u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
  "A self starter  \u{1F3C7}",
  "An innovator \u{1F4A1}",
  "A perpetual learner \u{1F4DA}",
  "A rule breaker \u{1F64A}"
], loader6 = async (_args) => getQuote(), getQuote = (value) => {
  let random = Math.floor(Math.random() * qualities.length);
  return qualities[random] === value ? getQuote(value) : qualities[random];
};

// app/routes/[robots.txt].tsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader7
});
var loader7 = () => {
  let robotText = `
User-agent: *
Disallow: /api
Sitemap: ${BASE_URL}/sitemap.xml
`;
  return new Response(robotText, {
    headers: { "Content-Type": "text/plain" },
    status: 200
  });
};

// app/routes/blog_.$slug.tsx
var blog_slug_exports = {};
__export(blog_slug_exports, {
  default: () => blog_slug_default,
  links: () => links2,
  loader: () => loader3,
  meta: () => meta4
});

// app/components/AppWysiwyg.tsx
var React3 = __toESM(require("react")), import_prismjs = __toESM(require("prismjs")), import_rich_text_react_renderer = require("@graphcms/rich-text-react-renderer"), import_prism_line_numbers = require("prismjs/plugins/line-numbers/prism-line-numbers"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), AppWysiwyg = (props) => {
  let { content } = props;
  return React3.useEffect(() => {
    import_prismjs.default.highlightAll();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "wysiwyg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_rich_text_react_renderer.RichText,
    {
      content,
      renderers: {
        code_block: ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("pre", { className: "line-numbers language-js", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("code", { className: "language-js", children }, void 0, !1, {
          fileName: "app/components/AppWysiwyg.tsx",
          lineNumber: 25,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/AppWysiwyg.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this)
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/AppWysiwyg.tsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/AppWysiwyg.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};

// app/routes/blog_.$slug.tsx
var import_react10 = require("@remix-run/react");

// node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css
var prism_line_numbers_default = "/build/_assets/prism-line-numbers-ASJWSOD2.css";

// node_modules/prismjs/themes/prism-tomorrow.css
var prism_tomorrow_default = "/build/_assets/prism-tomorrow-7KCD3N3I.css";

// app/routes/blog_.$slug.tsx
var import_prism_line_numbers3 = require("prismjs/plugins/line-numbers/prism-line-numbers"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: prism_line_numbers_default },
  { rel: "stylesheet", href: prism_tomorrow_default }
];
var meta4 = (args) => (console.log(" \u{1F4AC} ~ args.data", args), [
  {
    title: args.data?.title || "Blog | Post not found!"
    // ...getMetaData({
    //   canonical: args.parentsData?.root?.canonical,
    // })
  },
  {
    name: "description",
    content: args.data?.description
  },
  {
    tagName: "link",
    rel: "canonical",
    href: args.data?.canonical
  }
]);
function blog_slug_default() {
  let data2 = (0, import_react10.useLoaderData)(), date = new Date(data2.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    weekday: void 0,
    year: "numeric"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      AppHero,
      {
        className: "py-20 md:py-40",
        copy: date,
        highlight: data2.title,
        tag: "h1"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/blog_.$slug.tsx",
        lineNumber: 60,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/blog_.$slug.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "img",
      {
        alt: data2.title,
        className: "w-full border-b border-t border-color-border-dark",
        height: "auto",
        loading: "eager",
        src: data2.imageTemp,
        width: "100%"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/blog_.$slug.tsx",
        lineNumber: 68,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { className: "m-auto max-w-4xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mb-20 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "my-8 md:my-12 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "text-highlight m-0 mb-2 inline-block text-left text-3xl md:text-4xl", children: data2.title }, void 0, !1, {
          fileName: "app/routes/blog_.$slug.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "font-font-monospace text-sm", children: date }, void 0, !1, {
          fileName: "app/routes/blog_.$slug.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog_.$slug.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(AppWysiwyg, { content: data2.content.raw }, void 0, !1, {
        fileName: "app/routes/blog_.$slug.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog_.$slug.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog_.$slug.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog_.$slug.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/routes/portfolio.tsx
var portfolio_exports = {};
__export(portfolio_exports, {
  default: () => portfolio_default,
  loader: () => loader5,
  meta: () => meta5
});
var import_react12 = require("@remix-run/react");

// app/components/PortfolioPreview.tsx
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), PortfolioPreview = (props) => {
  let { current = !1, data: data2 } = props, date = new Date(data2.date), _renderImage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "img",
    {
      alt: "",
      className: "w-full border transition-all hover:rotate-3 hover:scale-110",
      height: "auto",
      src: data2.images[0].url,
      width: "auto"
    },
    void 0,
    !1,
    {
      fileName: "app/components/PortfolioPreview.tsx",
      lineNumber: 24,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/PortfolioPreview.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_react11.Link,
    {
      className: "work-preview text-color-copy",
      prefetch: "intent",
      to: `/portfolio/${data2.slug}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { className: "m-0 font-font-serif text-xl font-bold", children: data2.title }, void 0, !1, {
          fileName: "app/components/PortfolioPreview.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-1 mb-6 flex items-baseline gap-2 font-medium text-color-copy-dark", children: [
          !current && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: new Date(date).getFullYear() }, void 0, !1, {
            fileName: "app/components/PortfolioPreview.tsx",
            lineNumber: 44,
            columnNumber: 22
          }, this),
          !current && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "font-light", children: "|" }, void 0, !1, {
            fileName: "app/components/PortfolioPreview.tsx",
            lineNumber: 45,
            columnNumber: 22
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: data2.company }, void 0, !1, {
            fileName: "app/components/PortfolioPreview.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/PortfolioPreview.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: data2.overview }, void 0, !1, {
          fileName: "app/components/PortfolioPreview.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/PortfolioPreview.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
};

// app/routes/portfolio.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
var meta5 = (args) => [
  {
    title: `Featured Work | ${SITE_TITLE}`
  },
  {
    name: "description",
    content: `A collection of ramblings by ${SITE_AUTHOR}.`
  }
  // ...getMetaData({
  //   canonical: args.parentsData?.root?.canonical,
  // })
];
function portfolio_default() {
  let data2 = (0, import_react12.useLoaderData)(), current = data2.filter((node) => node.current), recent = data2.filter((node) => !node.current);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "bg-color-background-dark text-color-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        AppHero,
        {
          className: "py-20 md:py-40",
          copy: "Right now...",
          highlight: "What I'm building",
          tag: "h1"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 39,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mx-auto md:max-w-6xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3", children: current.map((node) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(PortfolioPreview, { current: !0, data: node }, node.slug, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "text-color-background-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        AppHero,
        {
          className: "py-20 md:py-40",
          copy: "In the past...",
          highlight: "What I've built",
          tag: "h2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 57,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mx-auto md:max-w-6xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3", children: recent.map((node) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(PortfolioPreview, { current: !1, data: node }, node.slug, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 67,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/portfolio.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/api.blog.ts
var api_blog_exports = {};
__export(api_blog_exports, {
  loader: () => loader8
});
var import_node5 = require("@remix-run/node");

// app/queries/getPosts.ts
var getPosts = gql`
  query {
    # Query enum values - https://graphcms.com/docs/api-reference/schema/enumerations
    __type(name: "Tags") {
      enumValues {
        name
      }
    }

    posts(orderBy: date_DESC) {
      content {
        html
      }
      date
      description
      id
      imageTemp
      intro
      slug
      tags
      sticky
      tags
      title
    }
  }
`;

// app/routes/api.blog.ts
var loader8 = async () => {
  try {
    let res = await (await fetchFromGraphCMS(getPosts)).json(), posts = res.data.posts ?? [], tags = (res.data.__type.enumValues ?? []).map((tag) => tag.name).sort();
    if (!posts.length)
      throw new Response("Blog posts not found", { status: 404 });
    return (0, import_node5.json)({ posts, tags });
  } catch (error) {
    throw error;
  }
};

// app/routes/sandbox.tsx
var sandbox_exports = {};
__export(sandbox_exports, {
  default: () => sandbox_default,
  meta: () => meta6
});
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), meta6 = (args) => [
  {
    title: `Sandbox | ${SITE_TITLE}`
  },
  {
    name: "description",
    content: "A Sandbox for Remix-Run and various web experiments."
  }
  // ...getMetaData({
  //   canonical: args.parentsData?.root?.canonical,
  // })
], sandbox_default = () => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "bg-gradient-dark-- bg-color-background-dark text-color-background", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    AppHero,
    {
      className: "mx-auto max-w-6xl py-20 md:py-40",
      copy: "Developer sandbox \u{1F3D6}\uFE0F",
      highlight: "A place to explore",
      tag: "h1"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/sandbox.tsx",
      lineNumber: 24,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni deleniti sunt aliquam animi corrupti quod dolorem libero obcaecati id harum similique iste iure, velit perspiciatis dolores nisi veniam. Eligendi, eum!" }, void 0, !1, {
      fileName: "app/routes/sandbox.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/sandbox.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SandboxSidebar, {}, void 0, !1, {
      fileName: "app/routes/sandbox.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sandbox.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/sandbox.tsx",
  lineNumber: 23,
  columnNumber: 5
}, this);

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  meta: () => meta7
});
var React4 = __toESM(require("react"));

// app/components/SectionTechnology.tsx
var import_classnames6 = __toESM(require("classnames")), import_react13 = require("react");

// app/data/details.ts
var data = {
  default: `This is a <b class="font-bold">non exhaustive</b> list of tools and technologies I use to make products come to life. I'm also very comfortable pushing pixels in Figma, Adobe, Video, and 3D modelling.`,
  TypeScript: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.",
  Remix: "Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.",
  React: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
  "Node.js": "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
  TailwindCSS: "TailwindCSS is a framework like no other. Rather than constraining you to a set design, it gives you the tools and the standardization to build exactly what you want.",
  DevOps: "Working on small(er) teams has allowed me to venture out of my comfort zone and into fields like DevOps. The opportunity to impact the Developer experience every step of the way has been incredibly rewarding.",
  Docker: "A microservice architecture encourages the use of many application working in tandem. Using Docker and Docker Compose we can quickly spin up very complex systems mirroring what we use in production.",
  Javascript: "I've been using Javascript for well over a decade and I've only continued to find myself more excited about the language and accellerated growth it has seen.",
  Kubernetes: "Running an organization like thredUP at scale is a great way to learn about the Kubernetes ecosystem. I've been using Kubernetes for a while now and I'm very excited to learn more about it in the future.",
  NextJS: "Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.",
  PostCSS: "PostCSS is a software development tool that uses JavaScript-based plugins to automate routine CSS operations. A tool for transforming CSS with JavaScript",
  VSCode: "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. It rocks \u{1F918}!",
  CSS: "Pushing pixels is what got me into development so its no suprise I genuinely love CSS. My preferred tooling includes; TailwindCSS, CSS Modules, PostCSS, and Progressive Enhancement."
};

// app/components/SectionTechnology.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), SectionTechnology = () => {
  let refDescription = (0, import_react13.useRef)(null), [heading, setHeading] = (0, import_react13.useState)(), description = heading ? data[heading] : data.default, keys = Object.keys(data).filter((key) => key !== "default");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:py-20 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "basis-2/5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "mb-8 text-xl md:text-3xl", children: [
        "Technology ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "ml-2", children: "\u{1F9F0}" }, void 0, !1, {
          fileName: "app/components/SectionTechnology.tsx",
          lineNumber: 22,
          columnNumber: 22
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionTechnology.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "work-details flex flex-wrap gap-2", children: keys.map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "button",
        {
          className: (0, import_classnames6.default)("rounded-md px-2 py-1 text-sm", {
            active: key === heading
          }),
          onClick: () => {
            setHeading(heading === key ? void 0 : key);
          },
          type: "button",
          children: key
        },
        key,
        !1,
        {
          fileName: "app/components/SectionTechnology.tsx",
          lineNumber: 30,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/SectionTechnology.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionTechnology.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "blockquote",
      {
        className: "my-8 basis-3/5 text-xl font-light leading-relaxed",
        dangerouslySetInnerHTML: { __html: description },
        ref: refDescription
      },
      void 0,
      !1,
      {
        fileName: "app/components/SectionTechnology.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/SectionTechnology.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};

// app/components/SectionAmbitions.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), SectionAmbitions = () => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "mx-auto my-20 max-w-3xl px-4 md:my-40 md:px-0 ", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "my-4 text-xl md:text-3xl", children: "Ambitions \u{1F3AF}" }, void 0, !1, {
    fileName: "app/components/SectionAmbitions.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("b", { children: "8+" }, void 0, !1, {
      fileName: "app/components/SectionAmbitions.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    " years of professional experience, the past 3 years at startups, and I love the flexibility it provides! It's allowed me to shift focus from the Frontend, to Backend, and into DevOps. I'm always looking for ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("b", { className: "italic", children: "new challenges" }, void 0, !1, {
      fileName: "app/components/SectionAmbitions.tsx",
      lineNumber: 9,
      columnNumber: 21
    }, this),
    " and",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("b", { className: "italic", children: "opportunities" }, void 0, !1, {
      fileName: "app/components/SectionAmbitions.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    " to push myself, and the products I help create."
  ] }, void 0, !0, {
    fileName: "app/components/SectionAmbitions.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/SectionAmbitions.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/routes/_index.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), meta7 = (args) => [
  {
    title: `${SITE_TITLE}`
  },
  {
    name: "description",
    content: SITE_DESCRIPTION
  },
  {
    tagName: "link",
    rel: "canonical",
    href: args.data?.canonical
  }
  // {
  //   name: "canonical",
  //   content: args.data?.canonical
  // }
  // ...getMetaData({
  //   canonical: args.parentsData?.root?.canonical,
  // })
];
function index_default() {
  let [heading, setHeading] = React4.useState("A Senior Software Engineer \u{1F1E6}\u{1F1EA}");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { className: "bg-contain relative z-0 m-auto flex flex-col-reverse items-center justify-center gap-4 py-20 md:flex-row md:py-40", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          AppHero,
          {
            className: "py-10 md:py-20 md:text-right",
            copy: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "whitespace-nowrap", children: heading }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 54,
              columnNumber: 19
            }, this),
            highlight: SITE_AUTHOR,
            tag: "h1"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 52,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "img",
          {
            alt: SITE_AUTHOR,
            className: "custom-bg-gradient aspect-square max-h-32 cursor-pointer overflow-hidden rounded-full p-1 transition-transform hover:scale-110 active:rotate-6 md:max-h-52",
            height: "auto",
            loading: "eager",
            onClick: async () => {
              let data2 = await getQuote(heading);
              setHeading(data2);
            },
            src: "/images/assets/shaik.jpeg",
            width: "auto"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 59,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "rotate-45 w-dvw absolute top-52 -left-64 z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: "/images/assets/animation.png", className: "w-6/12" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { className: "px-8 py-20 text-color-background-dark md:px-0 bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("blockquote", { className: "mx-auto my-20 max-w-4xl text-2xl font-normal md:my-40 md:text-3xl", children: [
      "Passionate about ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("b", { children: "quality code" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 76,
        columnNumber: 28
      }, this),
      " written ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("b", { children: "for humans" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 76,
        columnNumber: 56
      }, this),
      ", unlocking ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("b", { children: "developer productivity" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this),
      ", and creating a delightful",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("b", { children: "user experience" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SectionAmbitions, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { className: "bg-color-background-dark py-20 text-color-background-light bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SectionTechnology, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/resume.tsx
var resume_exports = {};
__export(resume_exports, {
  default: () => resume_default2,
  links: () => links3,
  meta: () => meta8
});

// app/hooks/useWebShareAPI.ts
var useWebShareAPI = () => {
  let isAvailable = typeof window < "u" && !!navigator.share, data2 = {
    text: SITE_DESCRIPTION,
    title: `Join me on ${SITE_TITLE}`
  };
  return {
    isAvailable,
    onShare: (url) => {
      isAvailable && navigator.share({ ...data2, url }).then(() => {
        window.gtag && window.gtag("event", "share", { method: "Web Share" });
      }).catch((error) => {
        console.error("Web Share error", error);
      });
    }
  };
};

// app/components/AppShareButton.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), AppShareLink = () => {
  let { isAvailable, onShare } = useWebShareAPI(), onClick = () => {
    onShare("https://mattscholta.com/resume");
  };
  return isAvailable ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "button",
    {
      className: "ui-btn custom-bg-gradient whitespace-nowrap rounded-2xl py-2 px-4 text-sm font-normal text-white",
      onClick,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("img", { alt: "Share", height: 20, src: "/images/svg/share.svg", width: 20 }, void 0, !1, {
        fileName: "app/components/AppShareButton.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/AppShareButton.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  ) : null;
};

// app/components/AppSocialLink.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), AppSocialLink = (props) => {
  let { data: data2 } = props, alt = `Follow me on ${data2.title}`, size = 14;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    "a",
    {
      className: "flex items-center gap-4 break-words break-all text-sm text-color-copy-light",
      href: data2.url,
      rel: "noopener noreferrer",
      target: "_blank",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { alt, height: size, src: data2.icon, width: size }, void 0, !1, {
          fileName: "app/components/AppSocialLink.tsx",
          lineNumber: 22,
          columnNumber: 7
        }, this),
        data2.title
      ]
    },
    data2.title,
    !0,
    {
      fileName: "app/components/AppSocialLink.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
};

// app/components/SectionEducation.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), SectionEducation = () => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "py-8 text-lg print:py-4 md:text-xl", children: "Education" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mb-8 border-t border-solid border-color-border print:hidden" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionEducation.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h3", { children: "San Francisco State University" }, void 0, !1, {
    fileName: "app/components/SectionEducation.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { className: "font-normal", children: [
    "Industrial Design",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("em", { className: "text-sm text-color-copy-light", children: "(incomplete)" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionEducation.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-sm", children: [
    "A late change of major from ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("b", { children: "Mechanical Engineering" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 17,
      columnNumber: 39
    }, this),
    " to",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("b", { children: "Industrial Design" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this),
    " and the lack of available courses I freelanced and went part-time over the course of several years doing graphic/web design, and web development."
  ] }, void 0, !0, {
    fileName: "app/components/SectionEducation.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/SectionEducation.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("ul", { className: "my-4 ml-4 list-disc text-sm font-light", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "my-1", children: "Industrial Designers Society of America 2004 - 2007" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "my-1", children: "Teaching Assistant: Automated Manufacturing Sys." }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "my-1", children: "Teaching Assistant: Metals Manufacturing" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "my-1", children: "Teaching Assistant: Drafting & Sketching for Design" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionEducation.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/SectionEducation.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/components/SectionExperience.tsx
var import_react14 = require("react");

// app/data/resume.ts
var experience = [
  // {
  //   company: "Rocket CMS",
  //   companyUrl: "https://rocketcms.org/",
  //   date: `Feb 2022 - Present`,
  //   description: `<p>RocketCMS lets anyone manage your website using the components you've designed.</p>`,
  //   highlights: [
  //     `Delivered a full rebuild & rebrand of the Python + Django website to NextJS`,
  //     `Migrated to a (nearly) fully containerized stack and development workflow`,
  //     `Introduced GraphQL and strong (generated) types across services`,
  //     `Abstracted a core style-guide used across services`
  //   ],
  //   image: `https://rocketcms.org/favicon.ico`,
  //   tags: [
  //      "NodeJS",
  //      "TailwindCSS",
  //      "TypeScript"
  //   ],
  //   title: `Founder`
  // },
  {
    company: "Shiftsmart",
    companyUrl: "https://shiftsmart.com/",
    date: "Sept 2022 - Present",
    dateRange: [new Date(2022, 9, 6)],
    description: `
      <p>
        Nearly two years in and we've made some incredible strides. We've paid
        down significant technical debt and have begun to see the fruits of our
        labor.
      </p>
    `,
    highlights: [
      "0 - 1 addition of a NX Monorepo with 12+ applications and 20+ packages",
      "Adoption of Remix, TailwindCSS, Expo, NestJS, GraphQL, Github Actions, and more"
      // `Dockerized the development workflow and tooling`,
      // `... And we're just getting started!`,
    ],
    image: "https://assets-global.website-files.com/602a3f3e454f14956d14543a/602a3f3e454f1438b61455af_ShiftsmartIcon.png",
    tags: ["NodeJS", "TypeScript"],
    title: "Staff Engineer"
  },
  {
    company: "Haldi",
    companyUrl: "https://haldi.com/",
    date: "Apr 2021 - Aug 2022",
    dateRange: [new Date(2021, 4, 1), new Date(2022, 7, 15)],
    description: `
      <p>
        One year in we've jump-started the organization's code! Taking a
        "loosely typed and strongly coupled" system and successfully flipping it.
        The entire stack is now containerized and makes us of Firebase Emulators
        for an incredible development workflow.
      </p>
    `,
    // <p>One year in and we've accomplished so much. Here are a few milestones worth mentioning.</p>
    highlights: [
      "0% - 80% Containerized stack and development workflow",
      "Introduced GraphQL and strongly types across services",
      "Delivered a full rebuild & rebrand of the Python + Django website to NextJS",
      "Survey Framework, CSS Style Guide, Monorepo, Unit/E2E Testing, and more"
    ],
    image: "https://haldi.com/favicon.ico",
    tags: [
      "Docker",
      "Google Cloud",
      "GraphQL",
      "GraphQL Nexus",
      "NextJS",
      "NodeJS",
      "Serverless",
      "TailwindCSS",
      "TypeScript"
    ],
    title: "Principal Engineer"
  },
  {
    company: "thredUP",
    companyUrl: "https://thredup.com",
    date: "Feb 2016 - Apr 2021",
    dateRange: [/* @__PURE__ */ new Date("February 2016"), /* @__PURE__ */ new Date("April 2021")],
    description: `<p>
      Successfully pitched, prototyped, and delivered several high-impact
      projects within the organization. Assisting in hiring, managing, and
      mentoring engineers at various levels, distributed across the globe.
    </p>`,
    highlights: [
      "Content Management System; Pitched, prototyped, and delivered",
      "Progressive Web App (PWA); Pitched, prototyped, and delivered",
      "Lerna Monorepo; Pitched, prototyped, and delivered",
      "CSS Overhaul; Pitched, prototyped, and delivered",
      "Apollo Migration, Redux Migration, Checkout Overhaul, and many more..."
    ],
    image: "https://cf-tup-assets.thredup.com/shop/images/manifest_v2/favicon_96.png",
    tags: [
      "CSS",
      "Docker",
      "HTML",
      "Kubernetes",
      "PostCSS",
      "NodeJS",
      "React",
      "TailwindCSS",
      "TypeScript",
      "Webpack"
    ],
    title: "Staff Engineer"
  },
  {
    company: "Bynd",
    companyUrl: "https://bynd.com",
    date: "Nov 2011 - Apr 2015",
    dateRange: [new Date(2011, 11, 1), new Date(2015, 4, 1)],
    description: `<p>
      Agency life in San Francisco affords the opportunity to work with a
      variety of "high profile" clients to create and deliver high-impact
      projects. As Team Lead, my responsibilities included: pitch work,
      application architecture, technical documentation, code reviews, and
      mentoring.
    </p>`,
    highlights: [
      "Google TrainUP; Pitched, architected, developed, and delivered",
      "Google Databoard; Conceptualized, architected, developed, and delivered",
      "Facebook Disaster Relief; Prototyped with BackboneJS and Facebook API's",
      "Apple iAds; Development of HTML micro sites internally for Apple",
      "Apple iAds; Pitched an abstraction to minimize production time/cost, which was adopted internally"
    ],
    image: "https://assets-global.website-files.com/646e3fdd996bec75dd974e1f/64c389c72e68f265c7ab93bb_bynd-favicon.jpg",
    tags: [
      "AngularJS",
      "BackboneJS",
      "CSS",
      "Google Cloud",
      "HTML",
      "Javascript"
    ],
    title: "Technical Team Lead"
  },
  {
    company: "Lift Agency",
    companyUrl: "https://liftagency.co",
    date: "Jul 2010 - Nov 2011",
    dateRange: [new Date(2010, 7, 1), new Date(2011, 11, 1)],
    description: `<p>
      Joining Lift Agency was a conscious decision to move away from any
      form of a "Design" related role and focus on "Engineering". At the time
      jQuery was the tool of choice and browser support/hacks were an art form.
    </p>`,
    highlights: [
      "Wrote the Charter Checkout system and client-side validation flow",
      'Experienced all the fun "quirks" of the IE days and Financial Systems',
      'Assisted in creating the "Lift Calculator" an iPhone application'
    ],
    image: "https://liftagency.co/favicon.ico",
    tags: [
      "ActionScript 3.0",
      "Adobe Flash",
      "CSS",
      "Development",
      "Git",
      "HTML",
      "Javascript",
      "jQuery",
      "PHP"
    ],
    title: "Interactive Developer"
  },
  {
    company: "Hotwire",
    companyUrl: "https://hotwire.com",
    contract: !0,
    date: "Apr 2010 - July 2010",
    dateRange: [new Date(2010, 4, 1), new Date(2010, 7, 1)],
    description: `<p>
      Worked in a hybrid Dev/Design capacity within the Creative Services
      department producing e-mails, banners, and 3rd party widgets.
    </p>`,
    highlights: [
      "Created initial prototypes for interactive widgets",
      "General design of marketing collateral"
    ],
    image: "https://hotwire.com/favicon.ico",
    tags: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "CSS",
      "Design",
      "HTML",
      "jQuery",
      "Prototyping"
    ],
    title: "Graphic Designer"
  },
  {
    company: "I.W. Group",
    companyUrl: "https://www.iwgroup.agency",
    date: "Sep 2008 - Feb 2010",
    dateRange: [new Date(2008, 8, 1), new Date(2010, 2, 1)],
    description: `<p>
      A hybrid Dev/Design role creating web and interactive materials for
      clients including; McDonald's, FedEx, PG&E, US Army, US Census, and
      others.
    </p>`,
    highlights: [
      "Management of the APAC Ronald McDonald House Charity web domain",
      "Design & development of interactive Flash media, across 3-5 languages",
      "Speaker: New York, non-profit meetup re: Using social networking to enhance brand awareness"
    ],
    image: "https://assets.website-files.com/6210110d90c0080391bd2d70/62ec7ce2c60a5c558566f5f1_IW%20favicon.png",
    tags: [
      "ActionScript 2.0",
      "ActionScript 3.0",
      "Adobe Flash",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "CSS",
      "HTML",
      "jQuery"
    ],
    title: "Interactive Designer/Developer"
  },
  {
    company: "Zipidee",
    companyUrl: "https://zipidee.com",
    date: "Oct 2007 - Aug 2008",
    dateRange: [new Date(2007, 10, 1), new Date(2008, 8, 1)],
    description: `<p>
      As with any startup, we tend to wear many hats, and this being my first
      professional / non-freelance position I took every opportunity I could
      to learn.
    </p>`,
    highlights: [
      "Implemented and managed the video encoding/transcoding processes",
      "Balancing speed/quality settings across multiple outputs for varying use-cases",
      "Development of custom branded, Flash video players for use on partner domains",
      "Partners include; TiVo, ASPCA, The Weather Channel, and others",
      "Development of interactive Flash components and banners used on site"
    ],
    // image: "https://www.iwgroup.agency/favicon.ico",
    tags: [
      "ActionScript 2.0",
      "Adobe Flash",
      "Adobe Photoshop",
      "CSS",
      "HTML",
      "Video encoding",
      "Video transcoding"
    ],
    title: "Multi-Media Production Artist"
  }
], social = [
  {
    icon: "/images/svg/envelope.svg",
    title: "matthew.scholta",
    url: "mailto:matthew.scholta@gmail.com"
  },
  // {
  //   icon: `/images/svg/phone.svg`,
  //   title: `(415) 722-7481`,
  //   url: `tel:+14157227481`
  // },
  {
    icon: "/images/svg/github.svg",
    title: "visormatt",
    url: "https://github.com/visormatt"
  },
  {
    icon: "/images/svg/linkedin.svg",
    title: "/in/MatthewScholta",
    url: "https://www.linkedin.com/in/MatthewScholta"
  },
  {
    icon: "/images/svg/twitter.svg",
    title: "@visormatt",
    url: "https://twitter.com/visormatt"
  }
];

// app/utils/date-time.ts
var import_date_fns = require("date-fns"), getTimeWorked = (start, end) => {
  let months = (0, import_date_fns.differenceInMonths)(end, start), years = Math.floor(months / 12), remainder = months % 12;
  return `${years} years and ${remainder} months`;
};

// app/components/SectionExperienceDetail.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), SectionExperienceDetail = (props) => {
  let { experience: experience2 } = props, {
    company,
    companyUrl,
    date,
    dateRange,
    description,
    highlights,
    image,
    title
  } = experience2, start = dateRange ? dateRange[0] : /* @__PURE__ */ new Date(), stop = dateRange?.[1] ? dateRange[1] : /* @__PURE__ */ new Date(), _length = getTimeWorked(start, stop);
  return console.log(`Worked at ${company} for`, _length), /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col gap-10 md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col gap-2 text-base md:basis-[160px] print:basis-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "flex items-center gap-2 font-bold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          "a",
          {
            className: "underline-offset-4 hover:underline print:text-color-copy-dark",
            dangerouslySetInnerHTML: { __html: company },
            href: companyUrl,
            rel: "noreferrer",
            target: "_blank"
          },
          void 0,
          !1,
          {
            fileName: "app/components/SectionExperienceDetail.tsx",
            lineNumber: 36,
            columnNumber: 13
          },
          this
        ),
        experience2.contract && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("small", { className: "text-xs font-normal italic text-gray-700", children: "(contract)" }, void 0, !1, {
          fileName: "app/components/SectionExperienceDetail.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        image && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          "img",
          {
            alt: `${company} favicon`,
            className: "h-4 w-4",
            height: "auto",
            loading: "eager",
            src: image,
            width: "auto"
          },
          void 0,
          !1,
          {
            fileName: "app/components/SectionExperienceDetail.tsx",
            lineNumber: 49,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/SectionExperienceDetail.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/SectionExperienceDetail.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "uppercase- text-xs font-medium", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "uppercase", children: title }, void 0, !1, {
          fileName: "app/components/SectionExperienceDetail.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "text-color-copy-light", children: date }, void 0, !1, {
          fileName: "app/components/SectionExperienceDetail.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionExperienceDetail.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionExperienceDetail.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex-1 text-sm leading-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: description } }, void 0, !1, {
        fileName: "app/components/SectionExperienceDetail.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ul", { className: "my-4 ml-4 list-disc text-sm font-light text-color-copy", children: highlights.map((highlight, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "li",
        {
          className: "my-1",
          dangerouslySetInnerHTML: { __html: highlight }
        },
        index,
        !1,
        {
          fileName: "app/components/SectionExperienceDetail.tsx",
          lineNumber: 70,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/SectionExperienceDetail.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionExperienceDetail.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, title, !0, {
    fileName: "app/components/SectionExperienceDetail.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
};

// app/components/SectionExperience.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), SectionExperience = () => {
  let [shown, setShown] = (0, import_react14.useState)(4), experience2 = experience.slice(0, shown), onToggleExp = () => {
    setShown(shown === 4 ? experience.length : 4);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "py-8 text-lg print:py-4 md:text-xl", children: "Experience" }, void 0, !1, {
        fileName: "app/components/SectionExperience.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mb-8 border-t border-solid border-color-border print:hidden" }, void 0, !1, {
        fileName: "app/components/SectionExperience.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionExperience.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mb-10 flex flex-col gap-10", children: experience2.map((exp) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      SectionExperienceDetail,
      {
        experience: exp
      },
      `${exp.company}/${exp.title}`,
      !1,
      {
        fileName: "app/components/SectionExperience.tsx",
        lineNumber: 27,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/SectionExperience.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "print:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "button",
      {
        className: "ui-btn custom-bg-gradient m-10 mx-auto block rounded-2xl border border-color-border bg-color-background-light py-2 px-4 font-font-sans-serif text-xs text-white",
        onClick: onToggleExp,
        children: shown === 4 ? "Show more" : "Show less"
      },
      void 0,
      !1,
      {
        fileName: "app/components/SectionExperience.tsx",
        lineNumber: 34,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/SectionExperience.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionExperience.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};

// app/styles/resume.css
var resume_default = "/build/_assets/resume-5I2R5AB7.css";

// app/routes/resume.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), links3 = () => [
  {
    href: resume_default,
    media: "print",
    rel: "stylesheet"
  }
], meta8 = (args) => [
  {
    title: `${SITE_YEAR} Resume | ${SITE_TITLE}`
  },
  {
    name: "description",
    content: `The online resume of ${SITE_AUTHOR}, A Senior Software Engineer located in San Diego, California.`
  }
];
function resume_default2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "m-auto max-w-5xl py-10 md:py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-col gap-20 px-4 md:flex-row md:px-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("aside", { className: "md:w-1/5 print:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "sticky top-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-row items-center justify-center gap-6 md:flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "img",
          {
            alt: SITE_AUTHOR,
            className: "custom-bg-gradient aspect-square max-h-48 overflow-hidden rounded-full p-1",
            height: "auto",
            loading: "eager",
            src: "/images/assets/matt-scaled.webp",
            width: "auto"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/resume.tsx",
            lineNumber: 41,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-shrink-0 flex-col gap-2 p-4", children: social.map(
          (data2) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(AppSocialLink, { data: data2 }, data2.title, !1, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 51,
            columnNumber: 17
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resume.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mt-8 flex gap-4 print:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "a",
          {
            className: "ui-btn custom-bg-gradient flex-1 whitespace-nowrap rounded-2xl px-4 py-2 text-center text-sm font-normal text-white",
            download: !0,
            href: "/resume/Matthew_Scholta_2024.pdf",
            children: "Download Resume"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/resume.tsx",
            lineNumber: 56,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(AppShareLink, {}, void 0, !1, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resume.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resume.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/resume.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "resume-sections mb-20 flex flex-1 flex-col gap-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h1", { className: "uppercase- mb-10 text-2xl font-extrabold md:text-4xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "sr-only", children: [
            "The ",
            SITE_YEAR,
            " online resume of "
          ] }, void 0, !0, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          SITE_AUTHOR
        ] }, void 0, !0, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mb-8 border-t border-solid border-color-border print:hidden" }, void 0, !1, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex items-center gap-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "mr-1", children: "\u{1F468}\u200D\u{1F4BB}" }, void 0, !1, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          " A Senior Software Engineer \u{1F1E6}\u{1F1EA} whose passion lies in creating ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("b", { children: "quality code" }, void 0, !1, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 78,
            columnNumber: 42
          }, this),
          " written",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("b", { children: "for humans" }, void 0, !1, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          ", unlocking ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("b", { children: "developer productivity" }, void 0, !1, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 79,
            columnNumber: 46
          }, this),
          ", and creating a delightful ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("b", { children: "user experience" }, void 0, !1, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 80,
            columnNumber: 39
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resume.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(SectionExperience, {}, void 0, !1, {
        fileName: "app/routes/resume.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(SectionEducation, {}, void 0, !1, {
        fileName: "app/routes/resume.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resume.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/resume.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/resume.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default,
  loader: () => loader8,
  meta: () => meta9
});

// app/components/BlogPreview.tsx
var import_react15 = require("@remix-run/react"), import_classnames7 = __toESM(require("classnames")), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), BlogPreview = (props) => {
  let { className, date, heading = "h3", slug, image, title } = props, Heading = heading, dateString = new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "UTC",
    weekday: void 0,
    year: "numeric"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    import_react15.Link,
    {
      className: (0, import_classnames7.default)("blog-preview relative flex flex-col", className),
      prefetch: "intent",
      to: `/blog/${slug}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("img", { alt: title, height: "auto", loading: "lazy", src: image, width: "auto" }, void 0, !1, {
          fileName: "app/components/BlogPreview.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Heading, { className: "mt-4 mb-2 text-2xl", children: title }, void 0, !1, {
          fileName: "app/components/BlogPreview.tsx",
          lineNumber: 38,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "font-font-monospace text-sm", children: dateString }, void 0, !1, {
          fileName: "app/components/BlogPreview.tsx",
          lineNumber: 39,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/BlogPreview.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  );
};

// app/components/BlogFeatured.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), BlogFeatured = (props) => {
  let { className, post } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    BlogPreview,
    {
      className,
      content: post.content.html,
      date: post.date,
      featured: post.sticky,
      heading: "h2",
      image: post.imageTemp,
      slug: post.slug,
      title: post.title
    },
    post.slug,
    !1,
    {
      fileName: "app/components/BlogFeatured.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
};

// app/components/BlogUpcoming.tsx
var import_classnames8 = __toESM(require("classnames")), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), BlogUpcoming = (props) => {
  let { className } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: (0, import_classnames8.default)("flex flex-col gap-10", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h3", { className: "text-2xl", children: "Upcoming Posts" }, void 0, !1, {
      fileName: "app/components/BlogUpcoming.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("ul", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { className: "mb-2 rounded-md border bg-color-background-light p-2 text-sm", children: "Escape Hatches - brought up in Vercel conf" }, void 0, !1, {
        fileName: "app/components/BlogUpcoming.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { className: "mb-2 rounded-md border bg-color-background-light p-2 text-sm", children: "We are all salesmen, quick prototypes, sandboxes" }, void 0, !1, {
        fileName: "app/components/BlogUpcoming.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { className: "mb-2 rounded-md border bg-color-background-light p-2 text-sm", children: "Developer tooling - debuggers & loggers" }, void 0, !1, {
        fileName: "app/components/BlogUpcoming.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { className: "mb-2 rounded-md border bg-color-background-light p-2 text-sm", children: "Lerna is back!" }, void 0, !1, {
        fileName: "app/components/BlogUpcoming.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { className: "mb-2 rounded-md border bg-color-background-light p-2 text-sm", children: "You are not Google - moving quickly" }, void 0, !1, {
        fileName: "app/components/BlogUpcoming.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { className: "mb-2 rounded-md border bg-color-background-light p-2 text-sm", children: "Reviewing pull requests - a simple framework" }, void 0, !1, {
        fileName: "app/components/BlogUpcoming.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogUpcoming.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BlogUpcoming.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/BlogUpcoming.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
};

// app/utils/blog.ts
var filterBlogPosts = (posts) => {
  let diy = { data: [], featured: [] }, technical = { data: [], featured: [] };
  return posts.forEach((post) => {
    let node = post.tags.includes("DIY") ? diy : technical;
    (post.sticky ? node.featured : node.data).push(post);
  }), {
    diy,
    technical
  };
};

// app/routes/blog.tsx
var import_react16 = require("@remix-run/react"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
var meta9 = (args) => [
  {
    title: `A developers ramblings | ${SITE_TITLE}`
  },
  {
    name: "description",
    content: `A collection of ramblings by ${SITE_AUTHOR}.`
  }
  // ...getMetaData({
  //   canonical: args.parentsData?.root?.canonical,
  // })
];
function blog_default() {
  let { posts, tags: _tags } = (0, import_react16.useLoaderData)(), data2 = filterBlogPosts(posts);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("section", { className: "bg-gradient-dark-- bg-color-background-dark text-color-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      AppHero,
      {
        className: "mx-auto max-w-6xl py-20 md:py-40",
        copy: "Yes, another blog...",
        highlight: "Developer ramblings",
        tag: "h1"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/blog.tsx",
        lineNumber: 40,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("section", { className: "section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20 px-4 py-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex flex-col gap-20 md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          BlogFeatured,
          {
            className: "basis-2/3",
            post: data2.technical.featured[0]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/blog.tsx",
            lineNumber: 50,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(BlogUpcoming, { className: "basis-1/3" }, void 0, !1, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3", children: data2.technical.data.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        BlogPreview,
        {
          content: post.content.html,
          date: post.date,
          heading: "h2",
          image: post.imageTemp,
          slug: post.slug,
          title: post.title
        },
        post.id,
        !1,
        {
          fileName: "app/routes/blog.tsx",
          lineNumber: 59,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("section", { className: "section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20 px-4 py-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h2", { className: "mb-8 w-full text-left text-3xl", children: "Do it yourself" }, void 0, !1, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { children: `You see and hear the acronym "DIY" everywhere, and you probably already know what it stands for: "do it yourself." It's a pretty straightforward-sounding concept. Well, when I am not building things with code, I love to work with my hands around the house. It's also amazing to share the process and experience with my kids.` }, void 0, !1, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      data2.diy.featured.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex flex-col gap-20 md:flex-row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(BlogFeatured, { className: "basis-2/3", post: data2.diy.featured[0] }, void 0, !1, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3", children: data2.diy.data.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        BlogPreview,
        {
          content: post.content.html,
          date: post.date,
          heading: "h2",
          image: post.imageTemp,
          slug: post.slug,
          title: post.title
        },
        post.id,
        !1,
        {
          fileName: "app/routes/blog.tsx",
          lineNumber: 92,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/uses.tsx
var uses_exports = {};
__export(uses_exports, {
  default: () => uses_default,
  meta: () => meta10
});

// app/components/SectionHardware.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), SectionHardware = () => {
  let laptop = "https://www.apple.com/macbook-pro/", monitor = "https://www.amazon.com/gp/product/B074JKT894", storage = "https://www.amazon.com/gp/product/B01MRSRQLA", disks = "https://www.amazon.com/gp/product/B01AV1697A", desk = "https://www.amazon.com/gp/product/B07HJJLLML", keyboard = "https://www.apple.com/shop/product/MK2A3LL/A/magic-keyboard-us-english", headphones = "https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B0756CYWWD", mouse = "https://www.apple.com/shop/product/MMMQ3AM/A/magic-mouse-black-multi-touch-surface", linkProps = {
    rel: "noreferrer",
    target: "_blank"
  }, cssHardware = "flex gap-4 items-center justify-center flex-1 rounded-md border border-solid border-color-border bg-color-background-light px-4 py-8";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("section", { className: "m-auto max-w-6xl py-20 px-4 md:my-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "pb-8 text-3xl", children: [
      "Hardware ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "ml-2", children: "\u{1F4BB}" }, void 0, !1, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 23,
        columnNumber: 18
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionHardware.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { children: "I've been happily developing on a Mac over the last 10+ years. However, I grew up on PC's and built a few rigs over the years for gaming and work. Now days a perk of working in Software our employer often supplies a well equipped box." }, void 0, !1, {
      fileName: "app/components/SectionHardware.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("ul", { className: "my-10 list-disc columns-1 pl-4 md:columns-2 lg:columns-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { children: [
        "Computer -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("a", { ...linkProps, href: laptop, children: 'MacBook Pro 14"' }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { className: "ml-4", children: "M1 Max with 64GB of RAM \u{1F60D} \u{1F525}" }, void 0, !1, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { children: [
        "Monitor -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("a", { ...linkProps, href: monitor, children: '34" LG Curved Ultra-wide' }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { children: [
        "Storage -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("a", { ...linkProps, href: storage, children: "TerraMaster RAID Enclosure" }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { className: "ml-4", children: [
        "2x",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("a", { ...linkProps, href: disks, children: "WD Gold 4TB @7200 RPM" }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { children: [
        "Desk -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("a", { ...linkProps, href: desk, children: "Adjustable height Desk" }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { children: [
        "Keyboard -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("a", { ...linkProps, href: keyboard, children: "Apple Magic Keyboard" }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { children: [
        "Music -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("a", { ...linkProps, href: headphones, children: "Bose Headphones" }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { children: [
        "Mouse -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("a", { ...linkProps, href: mouse, children: "Apple Magic Mouse" }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionHardware.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionHardware.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
};

// app/components/SectionMisc.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), SectionMisc = () => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("section", { className: "m-auto max-w-6xl px-4 md:my-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex flex-col gap-10 md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { className: "mb-8 text-3xl", children: [
      "Miscellaneous ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "ml-2", children: "\u{1F9E9}" }, void 0, !1, {
        fileName: "app/components/SectionMisc.tsx",
        lineNumber: 7,
        columnNumber: 27
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionMisc.tsx",
      lineNumber: 6,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { children: "Living in San Diego you can find me and the family at the beach! Otherwise there's a good chance I am hauling ass along the coast on my motorcycle \u{1F3CD}\uFE0F\u{1F4A8}." }, void 0, !1, {
      fileName: "app/components/SectionMisc.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionMisc.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex flex-shrink-0 flex-wrap gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      "img",
      {
        alt: "Me, my son, and our dog at the beach",
        className: "aspect-square max-w-[47%] flex-grow",
        height: "auto",
        loading: "lazy",
        src: "https://s3-us-west-1.amazonaws.com/mattscholta/instagram/05.jpg",
        width: 200
      },
      void 0,
      !1,
      {
        fileName: "app/components/SectionMisc.tsx",
        lineNumber: 16,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      "img",
      {
        alt: "My 2014 Triumph Thruxton 900 in front of a Lifeguard tower",
        className: "aspect-square max-w-[47%] flex-grow",
        height: "auto",
        loading: "lazy",
        src: "https://s3-us-west-1.amazonaws.com/mattscholta/instagram/07.jpg",
        width: 200
      },
      void 0,
      !1,
      {
        fileName: "app/components/SectionMisc.tsx",
        lineNumber: 24,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      "img",
      {
        alt: "My 2014 Triumph Thruxton 900 in front some cool reeds",
        className: "aspect-square flex-grow",
        height: "auto",
        loading: "lazy",
        src: "https://s3-us-west-1.amazonaws.com/mattscholta/instagram/06.jpg",
        width: 200
      },
      void 0,
      !1,
      {
        fileName: "app/components/SectionMisc.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/SectionMisc.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/SectionMisc.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/SectionMisc.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/components/SectionSoftware.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), SectionSoftware = () => {
  let linkProps = {
    className: "font-font-serif text-base text-color-copy-light",
    rel: "noreferrer",
    target: "_blank"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("section", { className: "m-auto max-w-5xl px-4 py-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h2", { className: "mb-8 text-3xl", children: [
      "Software ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "ml-2", children: "\u{1F468}\u200D\u{1F4BB}" }, void 0, !1, {
        fileName: "app/components/SectionSoftware.tsx",
        lineNumber: 12,
        columnNumber: 18
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionSoftware.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "my-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h3", { className: "my-4 text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("a", { ...linkProps, href: "https://code.visualstudio.com/insiders", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "mr-2", children: "\u{1F9F0}" }, void 0, !1, {
            fileName: "app/components/SectionSoftware.tsx",
            lineNumber: 28,
            columnNumber: 15
          }, this),
          " Visual Studio Code"
        ] }, void 0, !0, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { children: "Is my editor of choice and I could not be happier! It 100% does everything I need it to and I am continuously impressed by the improvements I've seen to date." }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionSoftware.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h3", { className: "my-4 text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("a", { ...linkProps, href: "https://iterm2.com/", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "mr-2", children: "$" }, void 0, !1, {
            fileName: "app/components/SectionSoftware.tsx",
            lineNumber: 41,
            columnNumber: 15
          }, this),
          " Iterm2"
        ] }, void 0, !0, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { children: "As far as terminal users go, I use it heavily every day. iTerm2 is free and full of features I use and many that I don't even know exist. Tabs, split-view, fast and reliable." }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionSoftware.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h3", { className: "my-4 text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          "a",
          {
            ...linkProps,
            href: "https://www.docker.com/products/docker-desktop",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "mr-2", children: "\u{1F433}" }, void 0, !1, {
                fileName: "app/components/SectionSoftware.tsx",
                lineNumber: 57,
                columnNumber: 15
              }, this),
              " Docker Desktop"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/SectionSoftware.tsx",
            lineNumber: 53,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { children: "At the core of the modern development workflow is \u{1F433} Docker. I can't begin to explain how enjoyable a great docker and docker-compose workflow can be." }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionSoftware.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h3", { className: "my-4 text-xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "mr-2", children: "\u{1F3A8}" }, void 0, !1, {
            fileName: "app/components/SectionSoftware.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("a", { ...linkProps, href: "https://www.figma.com/", children: "Figma" }, void 0, !1, {
            fileName: "app/components/SectionSoftware.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { children: "It's not that often that get to play designer but I do enjoy keeping up with the tools. Figma is available in the browser + app, incredibly fast, powerful, and FREE. I love it!" }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionSoftware.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionSoftware.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionSoftware.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};

// app/routes/uses.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), meta10 = (args) => [
  {
    title: `Uses | ${SITE_TITLE}`
  },
  {
    name: "description",
    content: "Check out uses.tech for a list of more /uses pages!"
  }
  // ...getMetaData({
  //   canonical: args.parentsData?.root?.canonical,
  // })
];
function uses_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("section", { className: "bg-color-background-dark text-color-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      AppHero,
      {
        className: "py-20 md:py-40",
        copy: "If you're curious",
        highlight: "What I'm using",
        tag: "h1"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/uses.tsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(SectionHardware, {}, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(SectionSoftware, {}, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "bg-color-background-dark py-20 text-color-background-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(SectionMisc, {}, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/uses.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-EMA35KHG.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-DMN6MUDC.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-FACDRUK4.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PT4ELXKV.js", imports: ["/build/_shared/chunk-27RBXVTT.js", "/build/_shared/chunk-NGLSJUAW.js", "/build/_shared/chunk-I4JJ2S4S.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/[robots.txt]-XTGKYFIJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/[sitemap.xml]": { id: "routes/[sitemap.xml]", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/[sitemap.xml]-MCEDME5I.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-BYP7QQUD.js", imports: ["/build/_shared/chunk-C72NKOLF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.blog": { id: "routes/api.blog", parentId: "root", path: "api/blog", index: void 0, caseSensitive: void 0, module: "/build/routes/api.blog-4EFVS5HR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.blog.$slug": { id: "routes/api.blog.$slug", parentId: "routes/api.blog", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/api.blog.$slug-4PRKEJ3J.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.portfolio": { id: "routes/api.portfolio", parentId: "root", path: "api/portfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/api.portfolio-ZUE5DDJG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.portfolio.$slug": { id: "routes/api.portfolio.$slug", parentId: "routes/api.portfolio", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/api.portfolio.$slug-ANIF7Y62.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.qualities": { id: "routes/api.qualities", parentId: "root", path: "api/qualities", index: void 0, caseSensitive: void 0, module: "/build/routes/api.qualities-X7VYVI3F.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-EW6DQMVY.js", imports: ["/build/_shared/chunk-EFZ2K6SY.js", "/build/_shared/chunk-C72NKOLF.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog_.$slug": { id: "routes/blog_.$slug", parentId: "root", path: "blog/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog_.$slug-E7KXSZS4.js", imports: ["/build/_shared/chunk-EFZ2K6SY.js", "/build/_shared/chunk-C72NKOLF.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/portfolio": { id: "routes/portfolio", parentId: "root", path: "portfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/portfolio-KBYZYKEF.js", imports: ["/build/_shared/chunk-EFZ2K6SY.js", "/build/_shared/chunk-C72NKOLF.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/portfolio_.$slug": { id: "routes/portfolio_.$slug", parentId: "root", path: "portfolio/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/portfolio_.$slug-UNRYFGRW.js", imports: ["/build/_shared/chunk-EFZ2K6SY.js", "/build/_shared/chunk-C72NKOLF.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/resume": { id: "routes/resume", parentId: "root", path: "resume", index: void 0, caseSensitive: void 0, module: "/build/routes/resume-L5OUQRKP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sandbox": { id: "routes/sandbox", parentId: "root", path: "sandbox", index: void 0, caseSensitive: void 0, module: "/build/routes/sandbox-EDJ3ESIX.js", imports: ["/build/_shared/chunk-FHMSLTUH.js", "/build/_shared/chunk-C72NKOLF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sandbox_.css-polaroid": { id: "routes/sandbox_.css-polaroid", parentId: "root", path: "sandbox/css-polaroid", index: void 0, caseSensitive: void 0, module: "/build/routes/sandbox_.css-polaroid-KE3VOR6Y.js", imports: ["/build/_shared/chunk-FHMSLTUH.js", "/build/_shared/chunk-C72NKOLF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/uses": { id: "routes/uses", parentId: "root", path: "uses", index: void 0, caseSensitive: void 0, module: "/build/routes/uses-7O5AJA6B.js", imports: ["/build/_shared/chunk-C72NKOLF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "9e982294", hmr: { runtime: "/build/_shared/chunk-FACDRUK4.js", timestamp: 1719938282747 }, url: "/build/manifest-9E982294.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sandbox_.css-polaroid": {
    id: "routes/sandbox_.css-polaroid",
    parentId: "root",
    path: "sandbox/css-polaroid",
    index: void 0,
    caseSensitive: void 0,
    module: sandbox_css_polaroid_exports
  },
  "routes/api.portfolio.$slug": {
    id: "routes/api.portfolio.$slug",
    parentId: "routes/api.portfolio",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: api_portfolio_slug_exports
  },
  "routes/portfolio_.$slug": {
    id: "routes/portfolio_.$slug",
    parentId: "root",
    path: "portfolio/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: portfolio_slug_exports
  },
  "routes/api.blog.$slug": {
    id: "routes/api.blog.$slug",
    parentId: "routes/api.blog",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: api_blog_slug_exports
  },
  "routes/[sitemap.xml]": {
    id: "routes/[sitemap.xml]",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/api.portfolio": {
    id: "routes/api.portfolio",
    parentId: "root",
    path: "api/portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: api_portfolio_exports
  },
  "routes/api.qualities": {
    id: "routes/api.qualities",
    parentId: "root",
    path: "api/qualities",
    index: void 0,
    caseSensitive: void 0,
    module: api_qualities_exports
  },
  "routes/[robots.txt]": {
    id: "routes/[robots.txt]",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/blog_.$slug": {
    id: "routes/blog_.$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: blog_slug_exports
  },
  "routes/portfolio": {
    id: "routes/portfolio",
    parentId: "root",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: portfolio_exports
  },
  "routes/api.blog": {
    id: "routes/api.blog",
    parentId: "root",
    path: "api/blog",
    index: void 0,
    caseSensitive: void 0,
    module: api_blog_exports
  },
  "routes/sandbox": {
    id: "routes/sandbox",
    parentId: "root",
    path: "sandbox",
    index: void 0,
    caseSensitive: void 0,
    module: sandbox_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/resume": {
    id: "routes/resume",
    parentId: "root",
    path: "resume",
    index: void 0,
    caseSensitive: void 0,
    module: resume_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/uses": {
    id: "routes/uses",
    parentId: "root",
    path: "uses",
    index: void 0,
    caseSensitive: void 0,
    module: uses_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
