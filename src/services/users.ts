export async function getUsers() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=100");
    const json = await response.json();
    const users = json?.results.map((u: any) => ({
      name: u.name.first,
      lastName: u.name.last,
      picture: u.picture.thumbnail,
      country: u.location.country,
      loginID: u.login.uuid,
    }));
    return users;
  } catch (e: any) {
    throw new Error("error to fetch data from the api " + e.message);
  }
}
