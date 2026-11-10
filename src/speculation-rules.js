if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  const specScript = document.createElement("script");
  specScript.type = "speculationrules";
  const specRules = {
    "prerender": [
      {
        "where": {
          "and": [
            { "href_matches": "/*" },
            { "not": { "href_matches": "/logout" } },
            { "not": { "href_matches": "/login" } }
          ]
        }
      }
    ],
    eagerness: "moderate"
}
  specScript.textContent = JSON.stringify(specRules);
  document.head.append(specScript);
} 