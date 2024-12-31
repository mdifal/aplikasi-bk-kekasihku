import { Box, Typography, Container } from "@mui/material"
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextInput, PasswordInput } from "../../components/TextField.jsx";
import { DarkButton } from "../../components/Button.jsx";
import { formContentWrapper, linkStyle } from "../../styles/index.jsx";
import { Email } from "@mui/icons-material";


export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Kolom email tidak boleh kosong.",
    })
    .max(100, {
      message: "Format username belum sesuai.",
    })
    .refine((value) => !/\s/.test(value), {
      message: "Format username belum sesuai.",
    }),
  password: z
    .string()
    .min(1, {
      message: "Kolom Kata Sandi tidak boleh kosong.",
    })
    .min(6, {
      message: "Kata sandi tidak boleh kurang dari 6 karakter.",
    })
    .max(50, {
      message: "Kata sandi tidak sesuai.",
    })
    .refine((value) => /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(value), {
      message:
        "Kata sandi harus memiliki minimal 6 karakter kombinasi angka/huruf.",
    }),
});


const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data)
    // addPosts(data.username, data.password);
  };

  // const addPosts = async (username, password) => {
  //   try {
  //     const response = await userLogin(username, password);
  //     toast.success("Login berhasil!");

  //     setUserId(response.data.data.id);
  //     setToken(response.data.data.token);

  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     navigate("/daftar-resep");
  //   } catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       toast.error("Username atau Kata sandi yang anda masukkan salah");
  //     } else {
  //       toast.error("Terjadi kesalahan server. Silahkan coba kembali.");
  //     }
  //     reset();
  //   }
  // };

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh', 
      overflowY: "auto", bgcolor: '#FCF7FE', padding: {xs:'20px', sm:'70px'}
    }}>
      <Box
        sx={{
          bgcolor: 'white',
          borderRadius: '4px',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1.5fr' },
          minHeight:'100vh',
        }}>
        <Box sx={{ borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding:'25px 0 25px 0'}}>
          <img
            src="img/logo-bgwhite.png"
            alt="Logo Putih"
            style={{
              objectFit: 'contain',
              width: '30%',
              marginBottom: '40px'
            }}
          />
          <Typography sx={{ fontSize: {xs:'32px', sm:'36px'}, fontWeight: '600' }}>
            Hi! Selamat Datang
          </Typography>
          <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
            Sobat KEKASIH
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={formContentWrapper}>
            <TextInput
              label="Email"
              fieldName="email"
              field={register}
              errors={errors}
              required={true}
              placeholder="Masukkan email anda"
              icon={<Email/>}
            />
            <PasswordInput
              label="Password"
              fieldName="password"
              field={register}
              errors={errors}
              required={true}
              placeholder="Masukkan password anda"
            />
            <DarkButton
              text="Login"
              type="submit" />
          </form>
          <Typography sx={linkStyle}>
            Belum punya akun? <a href="" style={{
              color: '#351C43',
              fontWeight: '600'
            }}>Daftar</a>
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Container
            sx={{
              bgcolor: '#9F5BC2',
              width: '100%',
              height: '100%',
              borderRadius: '0 4px 4px 0',
              display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'center'
            }}
          >
            <img
              src="img/auth-img.png"
              alt="Contoh Gambar"
              style={{
                objectFit: 'contain',
                width: '70%',
              }}
            />
          </Container>
        </Box>
      </Box>

    </Box>
  )
}

export default Login;