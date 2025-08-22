import GmailFoot from "@/components/profile/footer-icon/GmailFoot";
import TwitterFoot from "@/components/profile/footer-icon/TwitterFoot";
import GithubFoot from "@/components/profile/footer-icon/GithubFoot";
import WechatFoot from "@/components/profile/footer-icon/WechatFoot";

export default function Footer() {
    return (
        <div className="flex gap-4 items-center justify-between border-t-1 border-gray-300 pt-4 pb-6 w-full">
            <span className="text-gray-500 text-m">&copy; 2025 Coder Zhang. All rights reserved</span>
            <div className="gap-4 text-gray-500 cursor-pointer hidden sm:flex">
                <GmailFoot width={24} height={24} />
                <TwitterFoot width={24} height={24} />
                <GithubFoot width={24} height={24} />
                <WechatFoot width={24} height={24} />
            </div>
        </div>
    )
}