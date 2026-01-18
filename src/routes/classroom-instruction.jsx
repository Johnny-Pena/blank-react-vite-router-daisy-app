import LessonPlanSample from '../components/LessonPlanSample.jsx';
import LessonDeliveryPlan from '../components/LessonDeliveryPlan.jsx';
export default function ClassroomInstruction() {
    return (
        <div className="mt-8">
       <LessonPlanSample />
        <LessonDeliveryPlan />
        </div>
    );
}