export const formatSummary = (summaryString: string | undefined): string => {
    if (!summaryString) return "";

    const bulletPoints = summaryString.split('\n').map(point => point.trim()).filter(point => point !== "");

    if (bulletPoints.length === 0) return "";

    return `<ul>${bulletPoints.map(point => `<li>${point}</li>`).join('')}</ul>`;
};

export const formatList = (items: any[] | undefined): string => {
    if (!items || items.length === 0) return "";
    return `<ul>${items.map(item => `<li>${item.content || item.title || item.company}</li>`).join('')}</ul>`;
}

export const formatResponsibilities = (responsibilities: string[] | undefined): string => {
    if (!responsibilities || responsibilities.length === 0) return '';
    return formatSummary(responsibilities.join('\n'));
  };