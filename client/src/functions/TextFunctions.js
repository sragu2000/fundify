export function TrimToNumOfCharacters(numberOfCharacters, string) {
  if (string.length > numberOfCharacters) {
    return string.substring(0, numberOfCharacters) + "...";
  } else {
    return string;
  }
}
