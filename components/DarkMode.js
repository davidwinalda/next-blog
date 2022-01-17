
export default function DarkMode() {
  return (
    <style jsx global>{`
      :root {
        --background-color: black;
        --text-color: white;
        --link-color: yellow;
      }
    `}
    </style>
  )
}