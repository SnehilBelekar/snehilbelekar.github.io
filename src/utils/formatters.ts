export const formatSummary = (summaryString: string | undefined): string => {
    if (!summaryString) return "";



        const lines = summaryString.split('\n').map(line => line.trim()).filter(line => line !== "");
    
        if (lines.length === 0) return "";

        let html = '';
        let currentList: string[] = [];

        lines.forEach(line => {
            // Check if line is a section title (ends with ':')
            if (line.endsWith(':')) {
                // Close previous list if any
                if (currentList.length > 0) {
                    html += `<ul>${currentList.map(item => `<li>${item}</li>`).join('')}</ul>`;
                    currentList = [];
                }
                // Add section title as a heading
                html += `<h3>${line}</h3>`;
            } else {
                // Add to current list
                currentList.push(line);
            }
        });

        // Close remaining list
        if (currentList.length > 0) {
            html += `<ul>${currentList.map(item => `<li>${item}</li>`).join('')}</ul>`;
        }

        return html;
};

export const formatList = (items: any[] | undefined): string => {
    if (!items || items.length === 0) return "";
    return `<ul>${items.map(item => `<li>${item.content || item.title || item.company}</li>`).join('')}</ul>`;
}

export const formatResponsibilities = (responsibilities: string[] | undefined): string => {
    if (!responsibilities || responsibilities.length === 0) return '';
    return formatSummary(responsibilities.join('\n'));
  };