import WelcomeLetter from '../components/WelcomeLetter.jsx';
import ClassroomRules from '../components/ClassroomRules.jsx';
import ClassroomArrangement from '../components/ClassroomArrangement.jsx';

export default function ClassroomStructure() {
    return (
<div className="mt-8">
    <WelcomeLetter />
    <ClassroomRules />
    <ClassroomArrangement />
</div>
    );
}