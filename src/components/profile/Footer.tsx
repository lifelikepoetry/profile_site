import GmailFoot from "@/components/profile/footer-icon/GmailFoot";
import TwitterFoot from "@/components/profile/footer-icon/TwitterFoot";
import GithubFoot from "@/components/profile/footer-icon/GithubFoot";
import WechatFoot from "@/components/profile/footer-icon/WechatFoot";
import { toast } from "sonner";

interface FooterItem {
    title: string;
    href: string;
}

export default function Footer() {

    const handleClick = (item: FooterItem) => {
        if (item.title === "Gmail") {
          // 邮箱复制到剪贴板
          navigator.clipboard.writeText(item.href);
          toast.success("gmail has copied to clipboard");
        } else if (item.title === "WeChat") {
          // 微信复制到剪贴板
          navigator.clipboard.writeText(item.href);
          toast.success("wechat has copied to clipboard");
        } else {
          window.open(item.href, "_blank");
        }
      };

    return (
        <div className="flex gap-4 items-center justify-between border-t-1 border-white/20 pt-4 pb-6 px-6 w-full z-10">
            <span className="text-white/80 text-m">&copy; 2025 Coder Zhang. All rights reserved</span>
            <div className="gap-4 text-white/80 cursor-pointer hidden sm:flex">
                <div className="hover:scale-130 hover:text-white transition-all duration-300" onClick={() => handleClick({title: "Gmail", href: "a1522077114@gmail.com"})}><GmailFoot width={24} height={24}/></div>
                <div className="hover:scale-130 hover:text-white transition-all duration-300" onClick={() => handleClick({title: "Twitter", href: "https://x.com/zh_coder"})}><TwitterFoot width={24} height={24} /></div>
                <div className="hover:scale-130 hover:text-white transition-all duration-300" onClick={() => handleClick({title: "Github", href: "https://github.com/lifelikepoetry"})}><GithubFoot width={24} height={24} /></div>
                <div className="hover:scale-130 hover:text-white transition-all duration-300" onClick={() => handleClick({title: "WeChat", href: "_LonganZ"})}><WechatFoot width={24} height={24} /></div>
            </div>
        </div>
    )
}