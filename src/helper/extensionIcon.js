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

export default function extensionIcon(ex,css) {
  switch (ex) {
    case 'py':
      return {
        name: 'Python',
        icon: <FaPython size={22} className={css} />
      };
    case 'html':
      return {
        name: 'HTML',
        icon: <FaHtml5 size={22} className={css} />
      };
    case 'rs':
      return {
        name: 'Rust',
        icon: <FaRust size={22} className={css} />
      };
    case 'css':
      return {
        name: 'CSS',
        icon: <MdCss size={22} className={css} />
      };
    case 'java':
      return {
        name: 'Java',
        icon: <FaJava size={22} className={css} />
      };
    case 'php':
      return {
        name: 'PHP',
        icon: <FaPhp size={22} className={css} />
      };
    case 'js':
      return {
        name: 'JavaScript',
        icon: <FaJsSquare size={22} className={css} />
      };
    case 'jsx':
      return {
        name: 'React',
        icon: <FaReact size={22} className={css} />
      };
    case 'rb':
      return {
        name: 'Ruby',
        icon: <DiRuby size={22} className={css} />
      };

    case 'swift':
      return {
        name: 'Swift',
        icon: <DiSwift size={22} className={css} />
      };
    case 'c':
      return {
        name: 'C',
        icon: <SiC size={22} className={css} />
      };
    case 'cpp':
      return {
        name: 'C++',
        icon: <SiCsharp size={22} className={css} />
      };
    case 'haskell':
      return {
        name: 'Haskell',
        icon: <SiHaskell size={22} className={css} />
      };
    case 'kotlin':
      return {
        name: 'Kotlin',
        icon: <SiKotlin size={22} className={css} />
      };
    case 'lua':
      return {
        name: 'Lua',
        icon: <SiLua size={22} className={css} />
      };
    case 'r':
      return {
        name: 'R',
        icon: <SiR size={22} className={css} />
      };
    case 'ruby':
      return {
        name: 'Ruby',
        icon: <SiRuby size={22} className={css} />
      };
      case 'rust':
        return {
          name: 'Rust',
          icon: <SiRust size={22} className={css}/>
        };
      case 'scala':
        return {
          name: 'Scala',
          icon: <SiScala size={22} className={css}/>
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
  