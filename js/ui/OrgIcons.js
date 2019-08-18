(() => {
  const defaultOpts = {"color": "#eee", "size": 45};
  const icons = {
    "add": ["0 0 24 24", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
    "back": ["-5 -2 26 26", "M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"],
    "close": ["0 0 24 24", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"],
    "cycle": ["0 0 24 24", "M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"],
    "clock": ["0 35 512 512", "M266.701,172.628h-32.101v127.446l101.649,60.539l16.051-26.553l-85.6-49.917V172.628z M256,87.665c-107,0-192.601,86.021-192.601,191.166C63.399,383.98,149,470,256,470c105.936,0,192.601-86.02,192.601-191.169 C448.601,173.687,361.936,87.665,256,87.665z M256,427.52c-82.393,0-149.8-66.906-149.8-148.688 c0-81.777,67.407-148.684,149.8-148.684c82.394,0,149.8,66.906,149.8,148.684C405.8,361.671,338.394,427.52,256,427.52z"],
    "dbox": ["0 0 43 40", "m12.5 0l-12.5 8.1 8.7 7 12.5-7.8-8.7-7.3zm-12.5 21.9l12.5 8.2 8.7-7.3-12.5-7.7-8.7 6.8zm21.2 0.9l8.8 7.3 12.4-8.1-8.6-6.9-12.6 7.7zm21.2-14.7l-12.4-8.1-8.8 7.3 12.6 7.8 8.6-7zm-21.1 16.3l-8.8 7.3-3.7-2.5v2.8l12.5 7.5 12.5-7.5v-2.8l-3.8 2.5-8.7-7.3z"],
    "delay": ["0 0 24 24", "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"],
    "delete": ["0 0 24 24", "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"],
    "done": ["0 0 24 24", "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"],
    "edit": ["0 0 24 24", "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"],
    "file": ["0 0 32 32", "M27 0h-24c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM26 28h-22v-24h22v24zM8 14h14v2h-14zM8 18h14v2h-14zM8 22h14v2h-14zM8 10h14v2h-14z"],
    "filter": ["0 0 24 24", "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"],
    "folder": ["0 0 24 24", "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"],
    "github": ["-3 -3 22 22", "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"],
    "org": ["-7.65 -13.389 162 176", "M141.044,59.449c-0.205-3.15-2.842-4.366-5.993-2.125 c-7.219-1.297-14.305-0.687-17.8-0.981c-7.662-1.073-14.041-5.128-14.041-5.128c0.932-1.239,0.486-3.917-5.498-4.101 c-1.646-0.542-3.336-1.327-4.933-1.979c0.544-1.145-0.133-2.836-0.133-2.836c2.435-0.672,2.808-3.842,1.848-5.709 c3.106,0.084,2.612-4.718,2.183-6.381c2.435-0.923,2.771-3.831,1.763-6.129c2.938-0.671,3.022-4.114,2.771-6.548 c3.022-0.168,2.603-5.457,2.603-6.549c2.604-1.679,2.016-3.946,2.425-6.573c1.605-3.25-0.577-4.173-2.116-0.71 c-1.651,3.001-3.769,4.311-3.75,6.528c0.755,1.259-5.625,3.106-3.61,7.052c-1.428,1.763-4.785,4.03-3.592,6.733 c-0.606,1.326-4.888,4.433-3.041,7.371c-4.029,2.687-3.789,3.335-2.938,5.793c-1.147,0.736-2.318,1.862-2.995,3.094 c-1.319-1.568-2.603-4.429-2.584-8.294c0-3.275-6.099,0.318-6.099,6.784c0,0.556-0.057,1.061-0.135,1.542 c-2.11,0.243-4.751,0.707-8.08,1.494c-0.106,0.073-0.157,0.186-0.182,0.316c-0.131-0.485-0.231-1.001-0.277-1.553 c-0.582-3.79-4.934-9.56-7.057-2.434c-1.096,2.611-1.74,4.392-2.115,5.789v0c0,0-0.336,0.226-0.957,0.61 c-2.619,1.622-3.562,6.686-13.075,9.883c-3.211,1.079-7.4,1.945-12.959,2.395C21.107,57.576,2.789,74.117,1.562,89.9 c-0.283,3.964,0.31,13.737,3.596,22.31c0.002,0.006,0.003,0.014,0.005,0.02c0.015,0.042,0.032,0.081,0.048,0.122 c0.052,0.134,0.103,0.267,0.156,0.398c0.28,0.718,0.579,1.405,0.895,2.062c1.885,4.028,4.46,7.59,7.934,9.882 c1.764,1.376,3.342,2.258,4.372,2.762c5.907,9.749,18.442,22.252,42.075,14.859c36.255-10.284,56.263,13.809,58.568,15.5 c3.399,3.433-8.786-29.835-34.587-44.788c-15.253-8.322-5.678-22.656-4.585-27.718c0,0,12.227,8.557,21.087-4.52 c8.004,2.062,13.367-1.462,20.251,1.03c4.183,1.833,21.77,0.726,15.234-9.104c4.11-2.683,4.544-1.815,6.6-5.9 C144.315,61.863,141.808,60.803,141.044,59.449z M70.751,46.15c-0.041,0.018-0.086,0.04-0.125,0.056 c0.039-0.034,0.075-0.062,0.115-0.102C70.744,46.118,70.748,46.136,70.751,46.15z M57.338,50.673 c-0.073,0.429-0.143,0.829-0.212,1.216c0.037-0.832,0.085-1.714,0.143-2.646C57.293,49.678,57.319,50.147,57.338,50.673z M68.031,44.34c0.746,1.124,1.662,2.179,1.662,2.179S68.818,45.729,68.031,44.34z"],
    "refile": ["0 0 24 24", "M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"],
    "repeat": ["0 0 24 24", "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"],
    "reset": ["0 0 24 24", "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"],
    "save": ["0 0 24 24", "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"],
    "settings": ["0 0 20 20", "M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"],
    "sync": ["0 0 24 24", "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"],
    "unlink": ["0 0 24 24", "M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z"],
    "warn": ["0,0,24,24", "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"]
  };

  ORG.Icons = {
    "ICONTYPE": {
      "TEXT": 0,
      "ICON": 1
    },
    "setDefault": (opts) => Object.assign(defaultOpts, opts),
    "icon": (iconName, opts) => {
      const icon = icons[iconName];
      const _opts = opts ? Object.assign({}, defaultOpts, opts) : defaultOpts;
      return icon ? `
<svg xmlns="http://www.w3.org/2000/svg" class="orgicon ${iconName} flex" viewBox="${icon[0]}" width="${_opts.size}" height="${_opts.size}" >
<a xlink:href="#0" class="${iconName}">${_opts.title || iconName}</a>
<path d="${icon[1]}" fill="${_opts.color}"/>
</svg>` : "";
    },
    "textIcon": (iconName, opts = {}) => `<a class="orgicon ${iconName} nowrap ${opts.clss || ""}">${opts.idx ? `<b>${opts.idx}</b>` : ""}${iconName}</a>`
  };
})();
