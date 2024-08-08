import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Label } from '@/components/ui/label';
import LoginForm from './components/LoginForm'; 
import backgroud from '@/assets/images/bg-2.jpg'; 
const Login: React.FC = () => {
  return (
    <div
      className="w-full h-full flex justify-center pb-2  bg-[#97bdf6]
    lg:grid lg:grid-cols-6 lg:gap-2 lg:h-screen"
    >
      <div
        className="hidden
      lg:col-span-4 lg:flex"
      >
        <img
          src={backgroud}
          alt="Image"
          className="h-screen w-full object-fill"
        />
      </div>

      <div className="lg:col-span-2 flex flex-col h-full gap-5 rounded-lg">
        <div className="flex flex-col shrink justify-center items-center">
          <div className="">
            <img
              src="/public/logo-with-title.png"
              alt="Image"
              className="lg:h-40 object-cover"
            />
          </div>
          <div className="flex flex-col shrink justify-center items-center">
            <Label className="font-sans font-bold text-2xl" htmlFor="name">
              Chào mừng đến với Trọ Tốt
            </Label>
            <Label className="font-sans font-semibold text-sm" htmlFor="name">
              Tìm mái ấm hoàn hảo của bạn tại đây
            </Label>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
