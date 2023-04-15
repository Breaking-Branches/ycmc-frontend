import {
  FaPython,
  FaHtml5,
  FaRust,
  FaJava,
  FaPhp,
  FaJsSquare,
  FaReact
} from 'react-icons/fa';
import {
  DiRuby,
  DiSwift
} from 'react-icons/di';
import {
  SiC,
  SiCsharp,
  SiHaskell,
  SiKotlin,
  SiLua,
  SiR,
  SiRuby,
  SiRust,
  SiScala,
} from 'react-icons/si';
import { AiFillFile } from 'react-icons/ai';
import { GrGolang } from 'react-icons/gr';
import { MdCss } from 'react-icons/md';

export default function extensionIcon(ex) {
  switch (ex) {
    case 'py':
      return {
        name: 'Python',
        icon: <FaPython size={22} className="mr-1" />
      };
    case 'html':
      return {
        name: 'HTML',
        icon: <FaHtml5 size={22} className="mr-1" />
      };
    case 'rs':
      return {
        name: 'Rust',
        icon: <FaRust size={22} className="mr-1" />
      };
    case 'css':
      return {
        name: 'CSS',
        icon: <MdCss size={22} className="mr-1" />
      };
    case 'java':
      return {
        name: 'Java',
        icon: <FaJava size={22} className="mr-1" />
      };
    case 'php':
      return {
        name: 'PHP',
        icon: <FaPhp size={22} className="mr-1" />
      };
    case 'js':
      return {
        name: 'JavaScript',
        icon: <FaJsSquare size={22} className="mr-1" />
      };
    case 'jsx':
      return {
        name: 'React',
        icon: <FaReact size={22} className="mr-1" />
      };
    case 'rb':
      return {
        name: 'Ruby',
        icon: <DiRuby size={22} className="mr-1" />
      };

    case 'swift':
      return {
        name: 'Swift',
        icon: <DiSwift size={22} className="mr-1" />
      };
    case 'c':
      return {
        name: 'C',
        icon: <SiC size={22} className="mr-1" />
      };
    case 'cpp':
      return {
        name: 'C++',
        icon: <SiCsharp size={22} className="mr-1" />
      };
    case 'haskell':
      return {
        name: 'Haskell',
        icon: <SiHaskell size={22} className="mr-1" />
      };
    case 'kotlin':
      return {
        name: 'Kotlin',
        icon: <SiKotlin size={22} className="mr-1" />
      };
    case 'lua':
      return {
        name: 'Lua',
        icon: <SiLua size={22} className="mr-1" />
      };
    case 'r':
      return {
        name: 'R',
        icon: <SiR size={22} className="mr-1" />
      };
    case 'ruby':
      return {
        name: 'Ruby',
        icon: <SiRuby size={22} className="mr-1" />
      };
      case 'rust':
        return {
          name: 'Rust',
          icon: <SiRust size={22} className="mr-1"/>
        };
      case 'scala':
        return {
          name: 'Scala',
          icon: <SiScala size={22} className="mr-1"/>
        };
      case 'go':
        return {
          name: 'Golang',
          icon: <GrGolang size={22} />
        };
        
        default:
            return {
                name:"Other",
                icon:<AiFillFile size={22}/>
            }
            
        }

}
  