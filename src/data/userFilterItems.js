const userFilterItems = [
  {
    type: "text",
    key_: "firstName",
  },
  { type: "text", key_: "lastName" },
  { type: "text", key_: "email" },
  {
    type: "date",
    key_: "birthDate",
  },
  {
    key_: "gender",
    text: "Gender",
    type: "select",
    values: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
    ],
  },
];

export default userFilterItems;
