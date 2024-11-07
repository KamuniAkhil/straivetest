export default function json2html(data) {
    // Get the unique keys from the objects for the table headers
    const headers = [...new Set(data.flatMap(item => Object.keys(item)))];
    
    // Create the table with the specified data-user attribute
    let html = `<table data-user="kamuniakhil97@gmail.com">\n  <thead>\n    <tr>`;
    
    // Add table headers
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    
    html += `</tr>\n  </thead>\n  <tbody>`;
    
    // Add rows of data
    data.forEach(row => {
        html += `\n    <tr>`;
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
        });
        html += `</tr>`;
    });
    
    html += `\n  </tbody>\n</table>`;
    
    return html;
}
