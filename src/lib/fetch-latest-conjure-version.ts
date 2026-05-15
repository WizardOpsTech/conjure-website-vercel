const FALLBACK_VERSION = "1.1.0";

export async function fetchLatestConjureVersion(): Promise<string> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/WizardOpsTech/conjure/releases/latest",
      { headers: { Accept: "application/vnd.github.v3+json" } },
    );
    if (!response.ok) return FALLBACK_VERSION;
    const data = await response.json();
    return (data.tag_name as string).replace(/^v/, "");
  } catch {
    return FALLBACK_VERSION;
  }
}

