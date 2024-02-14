function sendCustomEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  var startRow = 2; // Start at the second row
  var numRows = sheet.getLastRow() - 1; // Number of rows to process
  var dataRange = sheet.getRange(startRow, 1, numRows, sheet.getLastColumn());
  var data = dataRange.getValues();

  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var firstName = row[0]; // Assuming first name is in the first column
    var email = row[2]; // Assuming email is in the third column
    
    var emailBodyHtml = `
<p>Dear ${firstName},</p>
<p>I hope this email finds you well.</p>
<p>......</p>
<p>.......</p>
<p><strong>......</strong></p>
<ul>
  <li><strong>......</strong> ......</li>
  <li><strong>......</strong> ......</li>
  <li><strong>......</strong> ......</li>
</ul>
<p><strong>......</strong></p>
<ul>
  <li><strong>......</strong> ......</li>
  <li><strong>......</strong> ......</li>
  <li><strong>......</strong> ......</li>
</ul>
<p>......</p>
<p>Looking forward to hearing from you!</p>
<p>Best regards,</p>
<p>......</p>
`;

    var subject = "......";
    
    // Send the HTML email
    MailApp.sendEmail({
      to: email,
      subject: subject,
      htmlBody: emailBodyHtml
    });
    
    // Log for each sent email (optional)
    Logger.log("Sent to: " + email);
  }
}
