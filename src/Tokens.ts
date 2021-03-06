import { createToken, Lexer } from 'chevrotain';

export const Identifier = createToken({
  name: 'Identifier',
  pattern: /[a-zA-Z]\w*/,
});

export const Division = createToken({
  name: 'Division',
  pattern: /TARGET|DEFINE|SETUP|SELECT|SORT|LETTER|PRINT|TOTAL/i,
  longer_alt: Identifier,
});

export const DataType = createToken({
  name: 'DataType',
  pattern: /CHARACTER|CODE|DATE|FLOAT|MONEY|NUMBER|RATE/i,
  longer_alt: Identifier,
});

export const BuiltInFunction = createToken({
  name: 'BuiltInFunction',
  pattern: /ABS|ANYSERVICE|ANYWARNING|CAPITALIZE|CHARACTERREAD|CHARACTERSEARCH|CHRVALUE|CODEREAD|COL|COPYAPP|CREATEFINANCEFROMCREDREP|CTRLCHR|DATASIZE|DATE|DATEOFFSET|DATEREAD|DATEVALUE|DAY|DAYOFWEEK|DIALOGPROMPTCHAR|DIALOGPROMPTCODE|DIALOGPROMPTCOMBOOPTION|DIALOGPROMPTCOMBOSTART|DIALOGPROMPTDATE|DIALOGPROMPTLISTOPTION|DIALOGPROMPTLISTSTART|DIALOGPROMPTMONEY|DIALOGPROMPTNUMBER|DIALOGPROMPTPASSWORD|DIALOGPROMPTRATE|DIALOGPROMPTYESNO|DIALOGSTART|DIALOGSTARTGROUPBOX|DIALOGTEXTLISTOPTION|DIALOGTEXTLISTSTART|DIM|DIVPROJECTINIT|EMAILLINE|EMAILSEND|EMAILSTART|ENTERCHARACTER|ENTERCODE|ENTERDATE|ENTERMONEY|ENTERNUMBER|ENTERRATE|ENTERYESNO|EXECUTE|EXP|FILEARCHIVEADD|FILEARCHIVEEXTRACT|FILECLOSE|FILECREATE|FILEDECRYPT|FILEDELETE|FILEENCRYPT|FILEGETPOS|FILELISTCLOSE|FILELISTOPEN|FILELISTREAD|FILEOPEN|FILEREAD|FILEREADLINE|FILESETPOS|FILEWRITE|FILEWRITELINE|FLOAT|FLOATVALUE|FLOOR|FMPERFORM|FORMAT|FTPCLOSE|FTPCMD|FTPGET|FTPLOGIN|FTPOPEN|FTPPUT|FULLYEAR|HEADER|HEADERS|HOUR|HPBOXDRAW|HPESC|HPFONT|HPLINEDRAW|HPLINESPERINCH|HPRESET|HPSETUP|HPUNDERLINE|HPXPOS|HPYPOS|HTMLVIEWDISPLAY|HTMLVIEWLINE|HTMLVIEWOPEN|INITCREDITREPORT|INITSUBROUTINE|INT|LENGTH|LOANPROJECTINIT|LOG|LOWERCASE|MD5HASH|MINUTE|MOD|MONEY|MONEYREAD|MONTH|NUMBER|NUMBERREAD|OUTPUTCLOSE|OUTPUTOPEN|OUTPUTSWITCH|PASSWORDHASH|POPUPMESSAGE|PRINT|PULLCREDITREPORT|PWR|QUEUECREDITREPORT|RATE|RATEREAD|REMOVE|QUEUE|REPEATCHR|SCREENXYPOS|SEGMENT|STOPBLINK|SUPPRESSNEWLINE|SYSUSERNAME|TOTAL|TRAILERS|TRANPERFORM|UPPERCASE|VALIDATEFIELDSET|VALUE|WHILELIMIT|WIDTH|WINDDECONNECT|WINDDEDISCONNECT|WINDDEEXECUTE|WINDDEPOKEDATA|WINDOWSSEND|WINMESSAGEFIELD|WINMESSAGESTART|YEAR|YESNOPROMPT|YESNOREAD/i,
  longer_alt: Identifier,
});

export const Keyword = createToken({
  name: 'Keyword',
  pattern: /ACROSS|AFTERLAST|ALL|APPEND|BEFOREFIRST|BELL|BLINK|BLOCKSIZE|BRIGHT|CALL|CHANGE|CLEARSERVICE|CLEARWARNING|CREATE|DATAFILE|DELETE|DIALOGCLOSE|DIALOGDISPLAY|DIALOGENDGROUPBOX|DIALOGENDGROUPING|DIALOGINTROTEXT|DIALOGNEWCOLUMN|DIALOGPROMPTCOMBOEND|DIALOGPROMPTLISTEND|DIALOGSTARTGROUPING|DIALOGTEXTLISTEND|DIVPROJECTCALC|ENTERDELIMITER|ENTERLINE|EVERY|FOR ACCOUNT|FORMLENGTH|#INCLUDE|LABELS|LASTACCOUNT|LASTCREATE|LASTSEQUENCE|LEFT|LNInsFromSh|LOANPROJECTCALC|LOC|MICRACCOUNTNUMBER|MODIFY|NEWLINE|NEWPAGE|NEXTULI|NONANSISTANDARD|NONE|OVERDRAWAVAILABLECALC|OVERDRAWAVAILABLEINIT|PREFIX|PRINTCONTROL|PROCEDURE|READ|READWRITE|RECORDSIZE|REPORTCATEGORY|REVISE|RIGHT|SAVEMODE|SET|SETSERVICE|SETWARNING|STARTING|SUBTOTAL|SUPPRESS|TARGETFILE|TERMINATE|TITLE|UNTIL|VIN|WINMESSAGESEND|WINMODETEXT|WINMODEWINDOWS|WRAP|WRITEAND|ANY|ASCII|EBCDIC|END|FOR|DO|END|IF|THEN|ELSE|LANDSCAPE|NOT|OR|PORTRAIT|REVLANDSCAPE|REVPORTRAIT|UNIQUEKEY|WHILE/i,
  longer_alt: Identifier,
});

export const RecordType = createToken({
  name: 'RecordType',
  pattern: /ACCESS|ACCOUNT|ACHADDENDA|ACHADDINFO|ACHEDIT|ACHITEM|ACTIVITY|AGREEMENT|AGREEMENT TRANSACTION|ATMDIALOG|BATCHACHORIG|CARD|CASHLETTER|CASHORDER|CDMDIALOG|CHECK|CHECKORDER|COLLATERAL|COLLATERAL COLLHOLD|COLLATERAL DOCUMENT|COMMENT|CORPTRANSFER|CPWORKCARD|CREDREP|CREDREP ITEM|CTR|CTRACCOUNT|CTRBRANCH|CTRFOREIGN|CTRPERSON|CTRPERSON CTRTRANINFO|DEALER|EFT|BILL|PAYROLL|EFT|ADDENDAINFO|ESCROW|ESCROWANALYSIS|EXCPADDENDA|EXCPADDINFO|EXCPITEM|EXTERNALACCOUNT|EXTERNALLOAN|FMHISTORY|GLACCOUNT|GLENTRY|GLHISTORY|GLSUBACCOUNT|GLTRAN|HOLD|HOUSEHOLD|INVENTORY|INVOICE|IRS|IRA|IRS DISTRIBUTION|LOAN BANKRUPTCY PREPETITIONBAL|LNSEGMENT|LOAN BANKRUPTCY|LOAN|LOANAPP|LOANAPP FINANCE|LOANAPP PERSON|LOOKUP|MBRADDRESS|MEMBERREC|NAME|NONACCTNAME|NOTE|OFACDETAILS|PARTICIPANT|PARTICIPANT TRANSACTION|PARTICIPATION|POOL|PARTICIPATIONLOAN|POOLLOAN|PAYEE|PLEDGE|PORTFOLIO|PREFERENCE|RECEIVEDITEM|REMITTANCE|RESERVEPLAN|RESERVEPLAN LOAN|RESERVEPLAN TRANSACTION|SCHEDULE|SHARE ANALYSIS|SHARE ANALYSISGROUP|SHARE ANALYSISPLAN|SHARE|SAVINGS|SITE|SITE CASHORDERTYPE|TRACKING|TRANSACTION|TRANSFER|USER|VENDOR|WESTERNUNION|WIRE|WIRE BENEFICIARYADV|WIRE BENEFICIARYFIADV|WIRE BENEFICIARYFIINFO|WIRE BENEFICIARYINFO|WIRE DRAWDOWNDEBITACCTADV|WIRE FITOFIINFO|WIRE INTERMEDFIADV|WIRE INTERMEDFIINFO|WIRE RECEIVERFIINFO|WIRE SERVICEMESSAGE|WIRE USCAUDITINFO|WORKLISTEDIT|WORKLISTEDIT|WORKLISTFIELD/i,
});

export const StringLiteral = createToken({
  name: 'StringLiteral',
  pattern: /"(:?[^\\"]|\\(:?[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/,
});

export const NumberLiteral = createToken({
  name: 'NumberLiteral',
  pattern: /-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/,
});

export const WhiteSpace = createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: Lexer.SKIPPED,
});

export const Null = createToken({ name: 'Null', pattern: /null/i });
export const LCurly = createToken({ name: 'LCurly', pattern: /{/ });
export const RCurly = createToken({ name: 'RCurly', pattern: /}/ });
export const LParen = createToken({ name: 'LParen', pattern: /\(/ });
export const RParen = createToken({ name: 'RParen', pattern: /\)/ });
export const LSquare = createToken({ name: 'LSquare', pattern: /\[/ });
export const RSquare = createToken({ name: 'RSquare', pattern: /\]/ });
export const LArrow = createToken({ name: 'LArrow', pattern: /</ });
export const RArrow = createToken({ name: 'RArrow', pattern: />/ });
export const Comma = createToken({ name: 'Comma', pattern: /,/ });
export const Colon = createToken({ name: 'Colon', pattern: /:/ });
export const Equal = createToken({ name: 'Equal', pattern: /=/ });
export const Period = createToken({ name: 'Period', pattern: /\./ });
export const AtSymbol = createToken({ name: 'AtSymbol', pattern: /@/ });
export const Operation = createToken({
  name: 'Operation',
  pattern: /[\+\-\*\/]+/,
});
export const SingleQuote = createToken({ name: 'SingleQuote', pattern: /'/ });
export const Hashtag = createToken({ name: 'HashTag', pattern: /#/ });

export default [
  WhiteSpace, // NOTE: we are placing WhiteSpace first as it is very common thus it will speed up the lexer.
  Division,
  DataType,
  BuiltInFunction,
  RecordType,
  Null,
  Keyword,
  Identifier, // The Identifier must appear after the keywords because all keywords are valid identifiers.
  StringLiteral,
  NumberLiteral,
  LCurly,
  RCurly,
  LParen,
  RParen,
  LSquare,
  RSquare,
  LArrow,
  RArrow,
  SingleQuote,
  Comma,
  Colon,
  Equal,
  Period,
  AtSymbol,
  Hashtag,
  Operation,
];
