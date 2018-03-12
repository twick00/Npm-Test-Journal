export class Journal 
{
  constructor()
  {
    this.entryList = [];
  }
  newEntry(entry, date = Date.now()) {
    this.entryList.push({entry, date});
  }
  getEntries() {
    return this.entryDetailsList.entryList;
  }
}