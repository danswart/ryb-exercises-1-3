function createReferenceBacklinks() {
  // Select all references in the bibliography except the citation for the post itself
  const references = document.querySelectorAll(
    ".csl-entry:not(.quarto-appendix-citeas)"
  );
  references.forEach((ref, index) => {
    // Get the reference ID and remove the "ref-" prefix
    const refId = ref.id.replace("ref-", "");
    // Find the corresponding citation spans
    const citationSpans = document.querySelectorAll(
      `span[data-cites="${refId}"]`
    );
    citationSpans.forEach((span, spanIndex) => {
      // Assign a unique ID to each citation span if it doesn't have one
      if (!span.id) {
        span.id = `citation-${refId}-${index}-${spanIndex}`;
      }
      // Create the backlink
      const backlink = document.createElement("a");
      backlink.href = `#${span.id}`;
      backlink.innerHTML = "↩️";
      backlink.style.marginLeft = "5px";
      // Append the backlink to the reference entry
      ref.appendChild(backlink);
    });
  });
}
document.addEventListener("DOMContentLoaded", createReferenceBacklinks);