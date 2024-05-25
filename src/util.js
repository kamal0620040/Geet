async function savan() {
  const response = await fetch('https://raw.githubusercontent.com/sokka0620040/song-data/main/data.json');
  const data = await response.json();
  return data;
}

export default savan;