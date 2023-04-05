import { useState, useEffect } from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  CardActions,
  Button,
  InputAdornment,
  Divider,
  IconButton,
  Alert
} from '@mui/material'

import { Email, Lock, VisibilityOff, Visibility } from '@mui/icons-material'

import login from '../../services/login'

function LoginCard() {
  const [showPassword, setShowPassword] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailRight, setEmailRight] = useState(false)
  const [passwordRight, setPasswordRight] = useState(false)

  useEffect(() => {
    if (email.length !== 0) {
      if (email.length > 5) {
        setEmailRight(true)
      } else {
        setEmailRight(false)
      }
    }
    if (password.length !== 0) {
      if (password[0] === password[0].toUpperCase()) {
        setPasswordRight(true)
      } else {
        setPasswordRight(false)
      }
    }
  }, [email, password])

  function IsEmailRight() {
    if (emailRight) {
      return
    }
    return (
      <Alert severity="error">
        Error in email, it should have more than 5 characters
      </Alert>
    )
  }

  async function userLogin() {
    const response = await login()
    if (response.status === 200) {
      // Guardar token + info en el localStorage
      // Redirigir a Home
    } else {
      // Mostrar error al usuario
      // Usuario o contraseña incorrecto
    }
  }

  return (
    <Card sx={{ width: '500px' }}>
      <CardHeader title="Login"></CardHeader>
      <CardContent>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          fullWidth={true}
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            )
          }}
        ></TextField>
        {IsEmailRight()}
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        ></TextField>
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button>Register</Button>
        <Button color="success" onClick={() => userLogin()}>
          Login
        </Button>
      </CardActions>
    </Card>
  )
}

export default LoginCard
