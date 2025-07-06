export interface Experiences {
    year: string,
    company: string,
    title: string,
    description: string
};

export interface Skill {
    name: string;
    level: number;
  }
  
export interface SkillGroup {
  title: string;
  skills: Skill[];
}