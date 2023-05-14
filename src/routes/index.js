import { useRoutes } from 'react-router-dom';
import HomeRoutes from './HomeRoutes';


// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([HomeRoutes]);
}
