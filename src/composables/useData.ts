import { ref as dbRef, getDatabase } from '@firebase/database'
import { useRTDB } from '@vueuse/firebase/useRTDB'
import type { CVData, JJKProject, JJKSkill, JJKTopic } from '~/Data'
import { useFirebase } from '~/modules/firebase'

export const useProjects = createGlobalState(() => useRTDB<JJKProject[]>(dbRef(getDatabase(useFirebase()), 'Projects')))
export const useSkills = createGlobalState(() => useRTDB<JJKSkill[]>(dbRef(getDatabase(useFirebase()), 'Skills')))
export const useTopics = createGlobalState(() => useRTDB<JJKTopic[]>(dbRef(getDatabase(useFirebase()), 'Topics')))
export const useCV = createGlobalState(() => useRTDB<CVData>(dbRef(getDatabase(useFirebase()), 'cv')))
