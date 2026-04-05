export interface Channel {
  name: string;
  id: string;
  category: string;
}

export const channels: Channel[] = [
  { name: "STR Sports 1 HD", id: "4470", category: "English" },
  { name: "STR Sports 1", id: "1142", category: "English" },
  { name: "STR Sports 2 HD", id: "4456", category: "English" },
  { name: "STR Sports 2", id: "1141", category: "English" },
  { name: "STR Sports 3", id: "147", category: "English" },
  { name: "STR Sports Select 1 HD", id: "300", category: "English" },
  { name: "STR Sports Select 1", id: "1123", category: "English" },
  { name: "STR Sports Select 2 HD", id: "301", category: "English" },
  { name: "STR Sports Select 2", id: "1114", category: "English" },
  { name: "STR Sports Khel", id: "1998", category: "English" },
  { name: "STR Sports 1 Hindi HD", id: "174", category: "Hindi" },
  { name: "STR Sports 1 Hindi", id: "148", category: "Hindi" },
  { name: "STR Sports 2 Hindi HD", id: "1984", category: "Hindi" },
  { name: "STR Sports 2 Hindi", id: "1985", category: "Hindi" },
  { name: "STR Sports 1 Tamil HD", id: "4468", category: "Tamil" },
  { name: "STR Sports 1 Tamil", id: "1124", category: "Tamil" },
  { name: "STR Sports 2 Tamil HD", id: "4473", category: "Tamil" },
  { name: "STR Sports 2 Tamil", id: "2853", category: "Tamil" },
  { name: "STR Sports 1 Telugu HD", id: "4471", category: "Telugu" },
  { name: "STR Sports 1 Telugu", id: "1651", category: "Telugu" },
  { name: "STR Sports 2 Telugu HD", id: "4474", category: "Telugu" },
  { name: "STR Sports 2 Telugu", id: "2852", category: "Telugu" },
  { name: "STR Sports 1 Kannada", id: "1650", category: "Kannada" },
  { name: "STR Sports 2 Kannada", id: "4472", category: "Kannada" },
];

export const categories = ["All", "English", "Hindi", "Tamil", "Telugu", "Kannada"];
