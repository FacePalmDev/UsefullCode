/** 
 * Data Converter Class
 * Converts data from one format to another
 * */ 
export class DataConverter {

  /**
   * Converts data to delimited string
   * @param data The data to convert
   * @param delimiter Delimiter to use
   * @param ignoreColumns Columns to ignore
   * @param newline Newline character to use
   * @returns Converted data
   */
  private static toDelimited(data: any[], delimiter = ',', ignoreColumns: string[] = [], newline = "\r\n"): string {
    const firstRow = data[0];
    const headers = Object.keys(firstRow).filter(propName => !ignoreColumns.includes(propName));
    const headerRow = headers.join(delimiter);
    const rows = data.map(row => headers.map(hdr => row[hdr]).join(delimiter));
    return `${headerRow}${newline}${rows.join(newline)}`;
  }

  /**
   * Converts data to CSV string
   * @param data The data to convert
   * @param ignoreColumns Columns to ignore
   * @param newline Newline character to use
   * @returns Converted data
   */
  public static toCSV(data: any[], ignoreColumns: string[] = []): string {
    return this.toDelimited(data, ',', ignoreColumns);
  }

  /**
   * Converts data to TSV string
   * @param data The data to convert
   * @param ignoreColumns Columns to ignore
   * @param newline Newline character to use
   * @returns Converted data
   */
  public static toTSV(data: any[], ignoreColumns: string[] = []): string {
    return this.toDelimited(data, '\t', ignoreColumns);
  }
}
