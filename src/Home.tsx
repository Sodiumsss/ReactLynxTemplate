import { i18n } from "./i18n.js";
import { useNavigate } from 'react-router';
export function Home() {
    const navigate = useNavigate();
    return (
        <page>
            <view className="flex flex-col justify-center items-center min-h-screen text-center gap-2">
                <text className="text-6xl font-bold leading-normal underline">
                    {i18n.t('home')}
                </text>
                <text className="bg-blue-500 text-white px-4 py-2 rounded-md" bindtap={() => {
                    navigate('/');
                }}>
                    {i18n.t('back')}
                </text>
            </view>
        </page>


    );
}