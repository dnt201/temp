export interface iFile {
  key: React.Key;
  name: string;
  linkTo: string;
  owner: string;
  addedDate: string;
}

const dataSource: iFile[] = [
  {
    key: "1",
    name: "anhaTd2 The href attribute is required for an anchor to be keyboard accessibleaccessibleaccessibleaccessibleaccessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the",
    linkTo: "https://fb.com,",
    owner: "Mike",
    addedDate: "20/10/2022",
  },
  {
    key: "2",
    name: "cnhaTd2",
    linkTo: "https://fb.com,",
    owner: "Mike",
    addedDate: "20/10/2022",
  },
];
for (let i = 3; i < 1000; i++) {
  dataSource.push({
    key: `${i}`,
    name: i % 2 === 0 ? i + "nhaTd2" : "dnhaTd2",
    linkTo: "https://fb.com",
    owner: i + "Mike",
    addedDate:
      i % 3 === 0 ? "20/10/2022" : i % 2 === 0 ? "19/01/2022" : "21/10/2022",
  });
}
