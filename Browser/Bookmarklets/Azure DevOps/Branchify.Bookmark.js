/*
* Save this as a bookmark, you can then
* use this on an Azure DevOps ticket to create a branch for the current ticket. It automatically names it saving time and energy!
*/

javascript:(function()%7Bconst toKebabCase%3D str %3D>str %26%26str.match(%2F%5BA-Z%5D%7B2%2C%7D(%3F%3D%5BA-Z%5D%5Ba-z%5D%2B%5B0-9%5D*%7C%5Cb)%7C%5BA-Z%5D%3F%5Ba-z%5D%2B%5B0-9%5D*%7C%5BA-Z%5D%7C%5B0-9%5D%2B%2Fg).map(x %3D> x.toLowerCase()).join('-')%3Bconst toTitleCase %3D str %3D> str.charAt(0).toUpperCase() %2B str.slice(1)%3Bconst taskNumber %3D %24("span%5Baria-label%3D'ID Field'%5D").text()%3Bconst title %3D toTitleCase(toKebabCase(%24("input%5Bplaceholder%3D'Enter title'%5D").val().toLowerCase()))%3B%24("%5Bcommand%3D'actions'%5D").trigger("click")%3BsetTimeout(()%3D>%7B%24(".menu-item-icon.bowtie-icon.bowtie-tfvc-branch").trigger("click")%3BsetTimeout(()%3D>%24("input%5Bplaceholder%3D'Enter your branch name'%5D").val(%60feature%2F%23%24%7BtaskNumber%7D-%24%7Btitle%7D%60)%2C500)%3B%7D%2C500)%7D)()
