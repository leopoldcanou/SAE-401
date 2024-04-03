export function replaceSpacesWithDashesInURL() {
    const { pathname } = window.location;
    if (pathname.includes('/movie/')) {
      const newPathname = pathname.replace(/%20/g, '-');
      if (newPathname !== pathname) {
        window.history.replaceState(null, null, newPathname);
      }
    }
  }


export function formatFileNameForUrl(name) {
    return encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'));
}

export function unformatFileNameFromUrl(formattedName) {
    return decodeURIComponent(formattedName.replace(/-/g, ' '));
}