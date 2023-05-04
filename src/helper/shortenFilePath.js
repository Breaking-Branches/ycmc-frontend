export function shortenFilePath(filepath, maxLength=25) {
    if (filepath.length <= maxLength) {
      return filepath;
    }
    else{
      return "..."+filepath.slice(-25)
    }
  
    // const parts = filepath.split("/");
    // const numParts = parts.length;
    // let totalLength = 0;
    // let i;
  
    // for (i = numParts - 1; i >= 0; i--) {
    //   totalLength += parts[i].length + 1; // Add 1 for the "/"
    //   if (totalLength > maxLength) {
    //     break;
    //   }
    // }
  
    // const truncatedParts = parts.slice(i + 1);
    // return "..." + truncatedParts.join("/");
  }
  