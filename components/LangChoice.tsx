import { Button, ButtonGroup, FormControl, Input, Tab } from "@mui/material"


const LANGUAGES = ['python', 'typescript', 'bash', 'powershell', 'java', 'ruby']

export default function LangChoice({ lang, setLang }) {

  const handleChange = (event) => {
    setLang(event.target.value)
  }

  return (
    <ButtonGroup
      variant="text"
      color="primary"
      aria-label="text primary button group"
    >
      {LANGUAGES.map((val) => (
        <Button
          key={val}
          value={val}
          variant={lang === val ? 'contained' : 'text'}
          className={lang === val ? 'bg-blue-950 text-sky-300' : ' px-4'}
          // onClick={(e) => handleChange(e)}
          // sx={{ className: 'text-3xl w-40 justify-center uppercase' }}
          onClick={handleChange}
        >
          {val}
        </Button>
      ))}
    </ButtonGroup>
  )
}