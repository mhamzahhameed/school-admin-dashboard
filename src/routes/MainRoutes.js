import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const AttendanceReport = Loadable(lazy(() => import('views/attendance/attendanceReport/index.js')));
const ViewAttendance = Loadable(lazy(() => import('views/attendance/viewAttendance/index.js')));
const AddSchool = Loadable(lazy(() => import('views/school/addSchool/index.js')));
const ViewSchool = Loadable(lazy(() => import('views/school/viewSchool/index.js')));
const AddStudent = Loadable(lazy(() => import('views/students/addStudent/index.js')));
const ViewStudent = Loadable(lazy(() => import('views/students/viewStudent/index.js')));
const PromoteClass = Loadable(lazy(() => import('views/students/promoteClass/index.js')));
const PromoteSection = Loadable(lazy(() => import('views/students/promoteSection/index.js')));
const AddTeacher = Loadable(lazy(() => import('views/teacher/addTeacher/index.js')));
const ViewTeacher = Loadable(lazy(() => import('views/teacher/viewTeacher/index.js')));
const Class = Loadable(lazy(() => import('views/academicSetup/class/index.js')));
const Section = Loadable(lazy(() => import('views/academicSetup/section/index.js')));
const Subject = Loadable(lazy(() => import('views/academicSetup/subject/index.js')));
const SubjectAssign = Loadable(lazy(() => import('views/academicSetup/subjectAssign/index.js')));
const SetupClass = Loadable(lazy(() => import('views/academicSetup/classSetup/index.js')));
const MarkHomeWork = Loadable(lazy(() => import('views/markHomework/index.js')));
const ClassParticipants = Loadable(lazy(() => import('views/classParticipants/index.js')));
const ExamScore = Loadable(lazy(() => import('views/examScore/index.js')));
const NotebookMarking = Loadable(lazy(() => import('views/notebookMarking/index.js')));
const TeacherObservation = Loadable(lazy(() => import('views/teacherObservation/index.js')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'school',
      children: [
        {
          path: 'add',
          element: <AddSchool />
        },
        {
          path: 'view',
          element: <ViewSchool />
        }
      ]
    },
    {
      path: 'student',
      children: [
        {
          path: 'add',
          element: <AddStudent />
        },
        {
          path: 'view',
          element: <ViewStudent />
        },
        {
          path: 'promote-class',
          element: <PromoteClass />
        },
        {
          path: 'promote-section',
          element: <PromoteSection />
        }
      ]
    },
    {
      path: 'teacher',
      children: [
        {
          path: 'add',
          element: <AddTeacher />
        },
        {
          path: 'view',
          element: <ViewTeacher />
        }
      ]
    },
    {
      path: 'attendance',
      children: [
        {
          path: 'report',
          element: <AttendanceReport />
        },
        {
          path: 'view',
          element: <ViewAttendance />
        }
      ]
    },
    {
      path: 'academic-setup',
      children: [
        {
          path: 'setup-class',
          element: <SetupClass />
        },
        {
          path: 'class',
          element: <Class />
        },
        {
          path: 'section',
          element: <Section />
        },
        {
          path: 'subject',
          element: <Subject />
        },
        {
          path: 'subject-assign',
          element: <SubjectAssign />
        }
      ]
    },
    {
      path: 'mark-homework',
      element: <MarkHomeWork />
    },
    {
      path: 'notebook-marking',
      element: <NotebookMarking />
    },
    {
      path: 'class-participants',
      element: <ClassParticipants />
    },
    {
      path: 'teacher-observation',
      element: <TeacherObservation />
    },
    {
      path: 'exam-score',
      element: <ExamScore />
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
