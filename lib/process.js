/*****************************************
 * process.js
 * 
 * Process object contains methods and properties for
 * changing the running copy process, e.g. pausing and resuming.
 * 
 ******************************************/


/**
 * Find prior copy folder instance.
 * Find propertiesDoc and logger spreadsheet, and save IDs to userProperties, which will be used by loadProperties.
 *
 * @param selectedFolder object containing information on folder selected in app
 * @returns {{spreadsheetId: string, destId: string, resuming: boolean}}
 */

function resume(selectedFolder) {

    var priorCopy = findPriorCopy(selectedFolder.srcId);

    setUserPropertiesStore(priorCopy.spreadsheetId, priorCopy.propertiesDocId, selectedFolder.destId, "true")

    return {
        spreadsheetId: priorCopy.spreadsheetId,
        destId: selectedFolder.srcId,
        resuming: true
    };
}