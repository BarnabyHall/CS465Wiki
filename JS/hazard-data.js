export const hazards = {
    "Vulnerable Details and Material Hazards": {
        "Segmental Joints – Narrow In-Situ Mortar": {
            eventDescription: "The presence of narrow in-situ mortar can create a plane of weakness within a structure. This means that chlorides and contaminants have a higher likelihood of penetrating the structure more easily through this vulnerable area. When chlorides and contaminants infiltrate the structure, it can lead to an accelerated deterioration of the reinforcement and post-tensioning system.",
            consequenceDescription: "Deterioration of the longitudinal post-tensioning system with possible loss of capacity and eventual failure. \n Deterioration of the transverse post-tensioning system with potentially no loss of capacity or structural element failure if the post-tensioning tendons are well grouted.",
            consequenceRating: "High",
            riskManagementMeasures: ["Monitor the condition of the joints at routine inspections for signs of water leakage and for cracks which could be a sign of tendon failure."]
        },
        "Segmental Joints – Wide In-situ Mortar ": {
            eventDescription: "The presence of wide in-situ mortar can create a plane of weakness within a structure. This means that chlorides and contaminants have a higher likelihood of penetrating the structure more easily through this vulnerable area. When chlorides and contaminants infiltrate the structure, it can lead to an accelerated deterioration of the reinforcement and post-tensioning system.",
            consequenceDescription: "Deterioration of the longitudinal post-tensioning system with possible loss of capacity and eventual failure.",
            consequenceRating: "High",
            riskManagementMeasures: ["Monitor the condition of the joints at routine inspections for signs of water leakage and for cracks which could be a sign of tendon failure."],
        },
        "Construction Joints Intersection Ducts and Tendons ": {
            eventDescription: "Construction joints introduce a vulnerability in the structural integrity of the structure. Specifically, when these joints intersect with post-tensioned tendons, it significantly raises the risk of water and contaminants infiltrating the structure. Consequently, this heightened susceptibility accelerates the deterioration process, posing a greater risk to the reinforcement and post-tensioned elements.",
            consequenceDescription: "(Longitudinal PT) Deterioration of the longitudinal post-tensioning system with possible loss of capacity and eventual failure. \n(Transverse PT) Deterioration of the transverse post-tensioning system with potentially no loss of capacity or structural element failure if the post-tensioning tendons are well grouted.",
            consequenceRating: "High (Longitudinal PT), Medium (Transverse PT)",
            riskManagementMeasures: [
                "•	Monitor the condition of the joints at routine inspections for signs of water leakage and for cracks which could be a sign of tendon failure.",
            ]
        },
        "Half Joints": {
            eventDescription: "Half joints represent a critical vulnerability in bridge structures. When deterioration occurs in these half joints, there is a risk of losing support at the ends of the beams and for water and contaminates to penetrate the end anchorage region. This, in turn, can lead to the degradation of post-tensioning components, especially the end anchorages housed within these joints.",
            consequenceDescription: "Deterioration of the half-joints (reinforcement and concrete) and bearings resulting in the possible loss of beam support, structure capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Ensure the installation and maintenance of watertight expansion joints and prioritise the replacement of the expansion joints when they fail.",
                "Carry out concrete repairs to the spalled concrete and exposed and corroded reinforcement at the half-joints.",
                "Monitor condition of the half joints and bearings at routine inspections.",
            ]
        },
        "Hinge": {
            eventDescription: "Concrete hinges within bridge structures can pose a significant vulnerability. When deterioration occurs in these concrete hinges, it can lead to a reduction in capacity or functional impairment.",
            consequenceDescription: "Deterioration of the concrete and loss of section to reinforcement in the hinge (if present) could result in a loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Inspection the condition of the hinges and surrounding areas to determine any loss of function and/or deterioration.",
                "Repair any areas of damage to the water management system protecting the hinges for water ingress.",
            ]
        },
        "Lack of Redundancy": {
            eventDescription: "In cases where a post-tensioned structure has a limited number of tendons, the deterioration of just a few of these tendons can have a significant impact on the overall capacity and strength of the structure.",
            consequenceDescription: "A lack of redundancy in the design could mean that isolated deterioration of the prestressing system could result in a loss of capacity and structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake PTSI site investigations to determine the current condition of the post-tensioning system.",
                "Undertak an assessment to determine the current redundancies within the structure/post-tensioning."
            ]
        },
        "Tendons Grouped Together in One or Two Ducts Rather Than Each Tendon Protected in Its Own Duct": {
            eventDescription: "When tendons are consolidated within shared ducts, there is an increased probability that any degradation affecting the ducts and tendons will exert a more significant influence on the structural capacity, as opposed to the scenario where each tendon is housed within an individual duct.",
            consequenceDescription: "If water containing salts penetrates the duct, then deterioration of several tendons could occur simultaneously resulting in loss of capacity and structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake PTSI site investigations to determine the current condition of the post-tensioning system.",
                "Undertak an assessment to determine the current redundancies within the structure/post-tensioning."
            ]
        },
        "Tendons Located Close to The Upper Surface of The Deck Where Failure of The Deck Waterproofing May Led to Corrosion": {
            eventDescription: "Tendons in post-tensioned structures positioned near the outer surfaces are more vulnerable to water and contaminant ingress. In cases where the surfacing, waterproofing, or concrete has deteriorated, the decreased protective cover accelerates the potential for deterioration.",
            consequenceDescription: "If water, chlorides, and sulfates were to penetrate the waterproofing, deck concrete and ducts, deterioration of the post-tensioning system would be likely to occur, resulting in loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations at tendon high points to determine the current condition of the post-tensioning system.",
                "Monitor the carriageway surfacing across the structure and areas where the post-tensioned tendons are located close to the upper/outer surfaces."
            ]
        },
        "Use of Metal Spacers to Separate Post-Tensioning Wires": {
            eventDescription: "The incorporation of metal spacers within a post-tensioned duct can lead to various challenges during the grouting process, potentially impacting the flow of grout and causing the formation of voids and other structural vulnerabilities.",
            consequenceDescription: "Research suggests that the gap between the wire and spacer could provide a crevice in which corrosion could initiate. Localised corrosion could lead to failure of tendons resulting in loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Monitor the post-tensioned elements for signs of longitudinal cracking to concrete at routine inspections.",
            ]
        },
        "Unlined Ducts": {
            eventDescription: "In cases where post-tensioned tendons lack protective lining or ducts, there is an increased susceptibility to contamination, particularly from substances like water and chlorides. This heightened vulnerability can result in the infiltration of these contaminants into the tendons, ultimately leading to corrosion and the gradual deterioration of the tendon material, as there exists no safeguarding barrier.",
            consequenceDescription: "No physical barrier protecting the tendons means that water containing salts could penetrate through defects in the concrete and cause corrosion of the tendons resulting in loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Tendons Protected Only by Mortar/Concrete Surround": {
            eventDescription: "Tendons that lack the protective barrier of tendon ducts, relying solely on mortar and concrete for protection, become more vulnerable to the infiltration of water, chlorides, and other contaminants. This heightened susceptibility can potentially accelerate the deterioration rate of post-tensioned tendons.",
            consequenceDescription: "No physical barrier protecting the tendons means that water containing salts could penetrate through defects in the concrete and cause corrosion of the tendons resulting in loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Unprotected Anchorages on External Faces of Beams": {
            eventDescription: "When post-tensioned end anchorages are situated on the external surfaces of a structural element without adequate protection, the risk of corrosion significantly escalates. This heightened susceptibility can pave the way for corrosion-related issues, potentially culminating in structural failure and the gradual deterioration of the component.",
            consequenceDescription: "Local deterioration (at an unknown rate) of the post-tensioned end anchorages with potentially no loss of capacity or failure if the post-tensioned tendons are well grouted near end anchorages. Local deterioration (delamination, spalling and corrosion) to the concrete and reinforcement.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the end anchorages and the likelihood of future deterioration.",
            ]
        },
        "Anchorages Concealed Within Joints or On Upper Surfaces of Decks": {
            eventDescription: "When post-tensioned anchorages in a structure are concealed on the upper surfaces of the deck or within expansion/construction joints, there is a potential for problems to arise if the waterproofing, surfacing, or joints fail. Such failures can result in the penetration of water and contaminants into the end anchorage region of the post-tensioned system, leading to an increased rate of deterioration.",
            consequenceDescription: "Local deterioration (at an unknown rate) of the post-tensioned end anchorages with potentially no loss of capacity or failure if the post-tensioned tendons are well grouted near end anchorages. Local deterioration (delamination, spalling and corrosion) to the concrete and reinforcement.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the end anchorages and the likelihood of future deterioration.",
                "(Anchorages within joints) Monitor deck joints on future routine inspections to identify potential areas that have failed and are allowing water to ingress.",
                "(Anchorages on upper/outer surfaces) Monitor the carriageway surfacing and/or post-tensioned element condition for signs of cracking and deterioration."
            ]
        },
        "Grout Tubes Exposed in The Top of The Deck Slab": {
            eventDescription: "Exposure of grout tubes at the surface of the deck slab can facilitate the infiltration of water and contaminants along these tubes through capillary action. This can subsequently result in the degradation of the post-tensioning system.",
            consequenceDescription: "Exposed grout tubes can provide a direct route for water containing chlorides and sulfates to the post-tensioning tendons if not sufficiently grouted, causing corrosion of the tendons and resulting in loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Absence of An Adequate Drainage System": {
            eventDescription: "When a drainage system is absent or inadequate, water fails to drain effectively from the structure. This can result in the accumulation of stagnant water, increasing the risk of water infiltration into structural components. Such water ingress can accelerate the deterioration of elements, including bearings and other vital structural elements.",
            consequenceDescription: "Water, chlorides and sulfates could penetrate the concrete deck causing corrosion of the reinforcement and potentially the post-tensioning system resulting in a loss of capacity and eventual structural failure.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Un-block and clean the carriageway drains during cyclic maintenance making record of any defects to the drainage system.",
                "Keep the weep holes clear and consider drilling more or enlarging them.",
                "Investigate the extent of the drainage system and consider replacing or upgrading if required.",
            ]
        },
        "Absent Or Old Deck Waterproofing System": {
            eventDescription: "The functionality of old deck waterproofing may become compromised over time. When the waterproofing reaches the end of its intended design life, it becomes susceptible to an accelerated rate of deterioration. As a result, water and contaminants can more easily penetrate the structure, posing a potential risk such as deterioration of the concrete, reinforcement, and post-tensioning.",
            consequenceDescription: "If the waterproofing were to fail, then water, chlorides and sulfates could penetrate the concrete deck causing corrosion of the reinforcement and potentially the post-tensioning system resulting in a loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Monitor the deck surfacing and deck slab soffit during future inspections to identify defects that would indicate failures in the waterproofing.",
                "Long term measures should include re-waterproofing the deck."
            ]
        },
        "Absent of Deck Joint Seals": {
            eventDescription: "When deck joint seals are absent, water can readily penetrate the structure, leading to the deterioration of bearings and potential contamination of the end anchorage region of the post-tensioning system.",
            consequenceDescription: "Local deterioration (at an unknown rate) of the post-tensioned end anchorages with potentially no loss of capacity or failure if the post-tensioned tendons are well grouted near end anchorages. Local deterioration (delamination, spalling and corrosion) to the concrete and reinforcement.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Consider installing suitable deck joint seals to prevent the ingress of water.",
            ]
        },
        "Low Cover to Reinforcement": {
            eventDescription: "The low depth of cover concrete has significant implications for the durability and safety of a structure. The concrete cover serves as a protective layer, shielding the underlying reinforcement from environmental factors, primarily moisture and chlorides. When this protective layer is compromised, it increases the vulnerability of the reinforcement to corrosion, which can lead to delamination and spalling.",
            consequenceDescription: "The localised areas of exposed reinforcement corrode with possible loss of section and further concrete spalling. Defects are likely to be localised and not cause deterioration to the post-tensioning ducts or tendons.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Monitor the reinforced concrete elements in the regions of low cover for signs of deterioration to both the concrete material and embedded reinforcement.",
                "Undertake a special inspection to determine the condition of the reinforcement and the potential for corrosion to occur due to the lack a sufficient concrete cover.",
            ]
        },
        "Low Concrete Grade": {
            eventDescription: "When a lower-grade concrete is employed in the construction of post-tensioned structures, there exists a potential risk of developing concrete defects, including spalling and delamination. These defects can compromise the protective cover surrounding the post-tensioning system.",
            consequenceDescription: "Localised areas of defects develop which may reduce the protection to the post-tensioning system and cause a loss of capacity. If an assessment has been carried out, then the results may not be accurate if incorrect concrete strengths were used.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Consider taking concrete cores from a representative number of locations for strength testing.",
            ]
        },
        "Admixtures Containing Chlorides Used in Concrete or Grout": {
            eventDescription: "When concrete or grout incorporates admixtures containing chlorides, there is a heightened risk of chloride-induced pitting corrosion affecting the post-tensioned elements.",
            consequenceDescription: "Admixtures containing chlorides induce pitting corrosion of the reinforcement and or post-tensioning, resulting in loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
                "Undertake a special inspection to determine the condition of the reinforced concrete as well as the material properties of the concrete material."
            ]
        },
        "Inadequate Longitudinal or Shear Reinforcement (As Determined by Assessment and Observation of Cracks)": {
            eventDescription: "When it has been established that a structure lacks sufficient reinforcement, there is a potential for the design capacity and load-bearing capabilities of the post-tensioning system to deviate from the anticipated levels.",
            consequenceDescription: "Capacity of the structure may be reduced and increased loading may result in structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake a structural assessment to determine the current capacity of the structure.",
            ]
        },
        "Longitudinal Post-Tensioned Tendons with Sagging and Hogging Profiles ": {
            eventDescription: "In instances where tendons follow a hogging and sagging profile within a structure, there is a potential for issues to arise during the grouting process. These problems can result in the formation of voids within the tendon ducts, where the tendons are not fully encased within grout. This, in turn, reduces the protection provided to the strands, posing a risk to the integrity and performance of the post-tensioned system.",
            consequenceDescription: "Deterioration of the longitudinal post-tensioning system leading to possible loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
    },



    "Condition Hazards - External": {
        "Cracking In Prestressed Concrete Sections": {
            eventDescription: "Cracking In Prestressed Concrete Sections",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to establish the condition of the tendons, grout, and ducts at the locations of the longitudinal cracking including spans not previously investigated.",
                "Monitor crack widths and lengths to determine if the cracks are increasing in size at future Principal Inspections."
            ]
        },
        "Cracks And Potholes on Carriageway Surface": {
            eventDescription: "Cracks and potholes within the surfacing of the carriageway or footway can serve as indicators of surfacing failure. Such surface defects increase the likelihood of water and contaminants penetrating the structure, depending on the condition of any underlying waterproofing and/or concrete.",
            consequenceDescription: "Could contribute to deterioration of the waterproofing, reinforcement, and post-tensioning system although unlikely to itself result in structural failure.",
            consequenceRating: "Low",
            riskManagementMeasures: [
                "Monitor the surface cracking at routine inspections. Investigate the cause of cracking when the bridge is next resurfaced.",
                "Repair damaged areas of surfacing or consider complete resurfacing of the deck.",
            ]
        },
        "Surface Ponding on The Deck": {
            eventDescription: "When surface ponding occurs on the deck or carriageway surfacing, it is an indication that the drainage system is not functioning properly. It also suggests that the surfacing has failed in localised areas. These factors can contribute to an increased rate of water and contaminant penetration into the structure.",
            consequenceDescription: "Ponding water on the carriageway could lead to deterioration of the surfacing and waterproofing. Water could also become trapped inside structure voids causing corrosion of reinforcement and deterioration of concrete.",
            consequenceRating: "Low",
            riskManagementMeasures: [
                "Inspect the deck surfacing for local defects at future Principal Inspections.",
                "Investigate the integrity of waterproofing system.",
                "Manage and maintain the deck surfacing undertaking remedial works as necessary."
            ]
        },
        "Blocked Drainage Systems": {
            eventDescription: "When the drainage system becomes blocked, it hinders the proper drainage of water and contaminants from the structure as intended. Inadequate drainage can result in the penetration of contaminants into the structure, potentially leading to the deterioration of structural elements.",
            consequenceDescription: "Ponding water on the carriageway could lead to deterioration of the surfacing and waterproofing. Water could also become trapped inside structure voids causing corrosion of reinforcement and deterioration of concrete.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Un-block the drainage systems and ensure regular maintenance.",
                "Consider upgrading or replacing the drainage system if required."
            ]
        },
        "Water Trapped in Boxes and Other Structure Voids": {
            eventDescription: "When water becomes trapped and cannot drain or dissipate as intended, it increases the likelihood of water ingress into the structure. This trapped water can lead to the deterioration of the post-tensioning system and potentially cause unexpected loading due to its weight.",
            consequenceDescription: "Trapped water containing salts could penetrate defects in the concrete and cause corrosion of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Remove the standing water and silt within the cells/voids/boxes, un-block existing weep holes and consider drilling more. Rectify any drainage system problems.",
                "Continue to monitor the cells/voids/boxes internally during future Principal Inspections.",
                "Investigate and fix any water problems and leakages within the cells/voids/boxes."
            ]
        },
        "Damaged Or Missing Deck Joint Seals": {
            eventDescription: "When deck joint seals are damaged or missing, it creates an opportunity for water and contaminants to penetrate the joints, thereby increasing the likelihood of deterioration to any post-tensioned anchorages, bearings, and abutments located below the joints.",
            consequenceDescription: "Local deterioration of the post-tensioned end anchorages with potentially no loss of capacity or beam failure if the post-tensioned tendons are well grouted. Local deterioration (delamination, spalling and corrosion) to the concrete and reinforcement.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Ensure the installation and maintenance of watertight expansion joints.",
                "Monitor the surfacing over deck joints on future routine inspections to identify potential areas that have failed and are allowing water to ingress."
            ]
        },
        "Water Leaks and Staining on Soffit and At Joints and Cracks": {
            eventDescription: "Water leaks and staining on the deck soffits and at movement joints are indicative of deterioration to the water management system above. They serve as visible evidence that water is penetrating the structure and that the water management system is not functioning correctly. Consequently, the penetration of water and contaminants has the potential to accelerate the rate of deterioration, particularly affecting any post-tensioned end anchors and bearings in that region.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to establish the current condition of the post-tensioning system.",
                "Investigate any leakage and staining to determine where it originates from.",
                "Consider rectifying the drainage and waterproofing problems.",
            ]
        },
        "Excessive Deflection // Differential Vertical Deflection": {
            eventDescription: "Excessive deflection in post-tensioned structures can significantly compromise their safety, functionality, and aesthetics. It can lead to cracking, loss of pre-stress, and structural degradation, posing serious safety risks. Serviceability issues, such as user discomfort and functional problems with doors and windows, arise from noticeable sagging.",
            consequenceDescription: "Serviceability failures and reduction in load carrying capacity.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake regular Monitoring Inspection and contiune with Principal and General Inspections to monitor the deflections within the strucutre.",
            ]
        },
        "Spalling Due to Corrosion and/or Freeze/Thaw Action": {
            eventDescription: "Spalling, whether caused by corrosion of reinforcement or freeze-thaw action, can result in the loss of concrete section. This loss of concrete cover exposes the reinforcement and (potentially) the post-tensioned ducts.",
            consequenceDescription: "The localised areas of exposed reinforcement corrode causing loss of section and further concrete spalling. Defects are likely to be localised and not cause deterioration to the post-tensioning ducts or tendons.",
            consequenceRating: "Low",
            riskManagementMeasures: [
                "Carry out concrete repairs to the exposed and corroded reinforcement to reinstate the protective cover concrete.",
                "Monitor any areas of deterioration during future inspections."
            ]
        },
        "Spalling Due to Stress Concentrations": {
            eventDescription: "Spalling in post-tensioned concrete structures can severely impact safety and functionality by exposing steel tendons and reinforcing bars to corrosion, weakening the structure and potentially causing instability. This weakening affects the post-tensioning system and can lead to unexpected failures. From a serviceability perspective, spalling creates rough surfaces, posing hazards and disrupting building operations. Aesthetically, spalling is unattractive and suggests poor maintenance, reducing the building’s value and appeal. Durability is compromised as the exposed steel deteriorates faster, necessitating frequent and costly repairs. Preventing spalling involves high-quality construction practices, regular inspections, timely maintenance, and protective measures to ensure the structure’s longevity and reliability.",
            consequenceDescription: "Further spalling and cracking could occur, possibly resulting in a reduced load carrying capacity.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Carry out concrete repairs to the exposed and corroded reinforcement to reinstate the protective cover concrete.",
                "Monitor any areas of deterioration during future inspections."
            ]
        },
        "Visual Evidence of Reinforcement Corrosion": {
            eventDescription: "Visual evidence of corrosion in the structural reinforcement suggests that the protective concrete cover is not effectively performing its function. This corrosion could result from chloride ingress or exposure to environmental elements. If left unchecked, the corrosion will worsen, leading to further deterioration.",
            consequenceDescription: "The localised areas of exposed reinforcement corrode causing loss of section and further concrete spalling. Defects are likely to be localised and not cause deterioration to the post-tensioning ducts or tendons.",
            consequenceRating: "Low",
            riskManagementMeasures: [
                "Carry out concrete repairs to the exposed and corroded reinforcement to reinstate the protective cover concrete.",
                "Monitor any areas of deterioration during future inspections."
            ]
        },
        "Adverse Half-Cell and/or Chloride Test Results": {
            eventDescription: "Signs of potential corrosion activity within the structural reinforcement can be detected through the assessment of half-cell potentials or chloride ion concentrations. These testing methods are employed to predict areas at risk of corrosion, eliminating the need for visual confirmation.",
            consequenceDescription: "Corrosion activity is likely leading to reinforcement corrosion and delamination of concrete. Although not directly affecting the post-tensioning system, a reduction in concrete cover to the ducts will increase the possibility of deterioration of the post-tensioning system.",
            consequenceRating: "Low",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
                "Undertake a Special Inspection to include a concrete condition testing and delamination survey to the post-tensioned, reinforced concrete, elements.",  
            ]
        },
        "Cracks, Leaks and Stains to Movement/Expansion Joints": {
            eventDescription: "Cracks, leaks, and stains in movement or expansion joints of post-tensioned concrete structures pose significant risks to their integrity, functionality, and aesthetics. Damage to these joints can compromise structural integrity, accelerate corrosion, affect functionality and safety, and diminish the building's appearance and value. Proactive inspection, repair, and waterproofing measures are essential to maintain the structure's longevity and performance.",
            consequenceDescription: "Deterioration of the post-tensioning system typically towards the end anchorage region, potentially leading to loss of capacity and eventual structural failure where the tendons are not grouted/anchored sufficiently.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Monitor the condition of the construction joints at future Principal and General Inspections.",
                "Monitor any known areas of cracking, leakage and staining for signs of further deterioration."
            ]
        },
        "Deterioration And Damage to Bearings": {
            eventDescription: "Corrosion, deterioration, and damage to bearings can have detrimental effects on their functionality, leading to unexpected stress accumulation within the structure. This, in turn, can significantly impact the structural capacity and performance of the system.",
            consequenceDescription: "Long term deterioration of the bearings with no remedial maintenance could result in the bearings becoming non-functional. Excess stresses would be placed into the deck potentially resulting in structural cracking and loss of capacity.",
            consequenceRating: "Low",
            riskManagementMeasures: [
                "Undertake a Special or Principal Inspection to determine the current condition of the bearings.",
                "Monitor the condition of the bearings and carry out any maintenance as required.",
                "Repair, clean and re-grease the bearings."
            ]
        },
        "Unexpected Bearing Movement/Rotation or Failure to Move/Rotate as Expected": {
            eventDescription: "Sudden or unanticipated shifts in the bridge bearings may indicate a malfunction in their operation. When bearings fail to perform as intended, it can lead to unforeseen stress concentrations arising from improper movement or expansion of the structure.",
            consequenceDescription: "Unexpected movements would likely result in a temporary restriction or closure whilst the defect is fully investigated.",
            consequenceRating: "Low",
            riskManagementMeasures: [
                "Undertake a Special or Principal Inspection to determine the current condition of the bearings.",
                "Monitor the condition of the bearings and carry out any maintenance as required.",
                "Repair, clean and re-grease the bearings."
            ]
        },
        "Incorrect Location of Ducts": {
            eventDescription: "Incorrectly locating tendon ducts in a post-tensioned structure can cause structural weaknesses, functional limitations, and construction challenges. It compromises load distribution, obstructs building systems, and increases the risk of defects over time. Prevention involves careful planning, thorough inspection during construction, and ongoing maintenance to ensure safety and functionality.",
            consequenceDescription: "Structure may not behave as designed and load carrying capacity may be affected. If a load assessment has been undertaken the results may not be reliable.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
                "Undertake a structural review/assessment to determine the current capacity of the structure."
            ]
        },
        "High Sulfate Content": {
            eventDescription: "The presence of high sulfate contents in reinforced concrete poses a significant risk of sulfate attack, a chemical reaction that can result in the deterioration of the concrete structure. Sulfate attack occurs when sulfates from external sources, such as soil or water, react with the concrete components.",
            consequenceDescription: "The initiation of sulfate attack, which triggers chemical reactions leading to localised deterioration and a potential loss of structural capacity.",
            consequenceRating: "Low",
            riskManagementMeasures: [
                "Undertake a Special Inspection to include concrete condition testing.",
            ]
        }
    },



    "Condition Hazards - Internal (Post-Tensioning)": {
        "Corrosion Of Ducts": {
            eventDescription: "Corrosion affecting the post-tensioning may result in loss of section. This loss of section can subsequently facilitate the passage of water and contaminants into the grout and tendons, exacerbating the issue further.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Perforation Of Ducts": {
            eventDescription: "Perforation within the post-tensioned ducts may allow for water and contaminates to penetrate into the tendon strands. This in turn leads to accelerated deterioration of the post-tensioned tendons.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Presence Of Water in Ducts": {
            eventDescription: "Water presence within post-tensioned ducts compromises structural integrity by accelerating tendon corrosion and reducing load-bearing capacity. It reduces durability, causing operational disruptions and maintenance challenges. Effective waterproofing during construction, regular inspection, and quality assurance prevent corrosion-related problems, ensuring long-term structural performance and cost efficiency.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Cracked Or Shattered Grout": {
            eventDescription: "Cracked or shattered grout in post-tensioned ducts jeopardises both structural integrity and functionality. It allows moisture to corrode steel tendons, reducing load-bearing capacity and risking failure. Functionally, it disrupts the system and may lead to operational issues. Timely repair and maintenance, along with preventive measures during construction, are crucial to ensure long-term structural reliability.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Soft Grout": {
            eventDescription: "Soft grout in post-tensioned ducts undermines structural integrity and system functionality. It heightens corrosion risks, weakens load-bearing capacity, and may lead to failures. Urgent repair and regular maintenance are vital to restore functionality and prevent long-term damage.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Moist Grout": {
            eventDescription: "Moist grout in post-tensioned ducts undermines structural integrity and system functionality. It heightens corrosion risks, weakens load-bearing capacity, and may lead to failures. Urgent repair and regular maintenance are vital to restore functionality and prevent long-term damage.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "High Chloride Content in Grout": {
            eventDescription: "Elevated levels of chloride ions in grout pose a significant risk of chloride induced pitting corrosion to the post-tensioned tendons. This corrosion has the potential to result in a reduction of the tendon's cross-section and overall load-bearing capacity.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Voids In Grout": {
            eventDescription: "When voids form within post-tensioned ducts and grout, an area is created where the tendons are not properly bedded along their length. This leads to several concerns, including inadequate support for the tendons and exposed steel, potentially increasing the rate of deterioration of the steel tendons.",
            consequenceDescription: "(Longitudinal) Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure. (Transverse) Deterioration of the transverse post-tensioning system with potentially no loss of capacity or structural element failure if the post-tensioning tendons are well grouted.",
            consequenceRating: "High (Longitudinal PT) // Medium (Transverse PT)",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
                "Consider re-grouting voided ducts should an assessment deem it necessary."
            ]
        },
        "Low Cement Content in Grout ": {
            eventDescription: "Grout with a low cement content, combined with poor mixing, can result in excessive water bleeding during the curing process. This can have several detrimental effects on the performance and functionality of the grout, especially in post-tensioned structures.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Ungrouted Ducts": {
            eventDescription: "The grout within the post-tensioning system acts to anchor the tendons along the length of the tendon and to provide protection against mositure and contaminates. Where the post-tensioned system has been left ungrouted there will be no redundancy if a tendon/strand was to break.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Incorrect Type or Size": {
            eventDescription: "Ungrouted tendons in post-tensioned ducts jeopardize both structural integrity and system functionality. They are prone to corrosion, weakening load-bearing capacity and risking failures. Urgent grouting and regular maintenance are vital to prevent long-term damage and ensure structural stability.",
            consequenceDescription: "Structure may not behave as designed and load carrying capacity may be affected. If a load assessment has been undertaken the results may not be reliable.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
                "Consider re-grouting voided ducts should an assessment deem it necessary."
            ]
        },
        "Missing Tendons": {
            eventDescription: "Tendons play a critical role in providing the necessary strength, stability, and load-carrying capacity to the structure. The absence of any intended tendons can significantly impact the structural performance.",
            consequenceDescription: "Structure may not behave as designed and load carrying capacity may be affected. If a load assessment has been undertaken the results may not be reliable.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake a structural assessment to determine the current capacity of the structure.",
            ]
        },
        "Corrosion Of Tendons": {
            eventDescription: "Corrosion of tendons in post-tensioned structures jeopardizes both structural integrity and functionality. It weakens load-bearing capacity, risking failure and reducing performance. Immediate remediation, regular inspection, and preventive measures are crucial for ensuring long-term stability and reliability.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Fracture Of Wires or Tendons": {
            eventDescription: "Fractured wires within a tendon bundle in post-tensioned structures compromise load-bearing capacity and functionality. They risk structural failure and performance issues. Immediate repair, regular inspection, and preventive measures are essential for long-term stability and reliability.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Loose Tendons": {
            eventDescription: "Loose tendons in post-tensioned structures jeopardize both structural integrity and functionality. They compromise load-bearing capacity, risking failures and performance issues. Immediate repair and regular maintenance, along with preventive measures, are crucial for long-term stability and reliability.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Voids At Anchorages": {
            eventDescription: "Voids at post-tensioned anchorages undermine both structural integrity and functionality. They weaken load-bearing capacity, leading to potential failures and performance issues. Immediate repair and regular maintenance, coupled with preventive measures, are vital for ensuring long-term stability and reliability.",
            consequenceDescription: "Local deterioration of the post-tensioned end anchorages with potentially no loss of capacity or beam failure if the post-tensioned tendons are well grouted. Local deterioration (delamination, spalling and corrosion) to the concrete and reinforcement.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Moisture/Water Present at Anchorages": {
            eventDescription: "Moisture at end anchorages in post-tensioned structures compromises structural integrity by causing corrosion and reducing load-bearing capacity, risking structural failure. It also disrupts functionality by increasing stresses and causing inefficiencies. Immediate repair, regular maintenance, and preventive waterproofing measures are essential for long-term stability and reliability.",
            consequenceDescription: "Local deterioration of the post-tensioned end anchorages with potentially no loss of capacity or beam failure if the post-tensioned tendons are well grouted. Local deterioration (delamination, spalling and corrosion) to the concrete and reinforcement.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "High Chloride Content in Anchorage Capping Concrete": {
            eventDescription: "High chloride content in the anchorage capping material can lead to the deterioration of post-tensioned end anchorages through chloride-induced corrosion. Chloride-induced corrosion is a common problem in reinforced and post-tensioned concrete structures, where chlorides penetrate the concrete and initiate corrosion of the embedded steel reinforcement, tendons and/or anchorages.",
            consequenceDescription: "Local deterioration of the post-tensioned end anchorages with potentially no loss of capacity or beam failure if the post-tensioned tendons are well grouted. Local deterioration (delamination, spalling and corrosion) to the concrete and reinforcement.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Corrosion Of Anchorages": {
            eventDescription: "Corrosion of anchorages in post-tensioned structures weakens load-bearing capacity and stability, risking structural failure. It disrupts functionality, causing uneven force distribution and increased maintenance needs. Immediate remediation, regular inspections, and preventive measures are crucial for ensuring long-term stability and reliability.",
            consequenceDescription: "Local deterioration of the post-tensioned end anchorages with potentially no loss of capacity or beam failure if the post-tensioned tendons are well grouted. Local deterioration (delamination, spalling and corrosion) to the concrete and reinforcement.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
                "Consider exposing all anchorages, applying a rust inhibitor, and re-covering with fresh material.",
                "Monitor the condition of the region in which the end anchorages are housed (i.e end expansion joints) for signs of corrosion staining."
            ]
        },
    },



    "History Hazards": {
        "Grouting Problems": {
            eventDescription: "Grouting problems in post-tensioned tendons weaken structural integrity by exposing tendons to moisture and air, leading to corrosion and reduced load-bearing capacity. They disrupt functionality by causing uneven force distribution and complicating maintenance. Immediate remediation, regular inspections, and preventive measures are essential for long-term stability and reliability.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
                "Consider re-grouting the voided ducts if an assessment deems this necessary."
            ]
        },
        "Tensioning Problems": {
            eventDescription: "Tensioning problems in post-tensioned tendons compromise structural integrity and functionality. Over-tensioned tendons cause excessive stress and cracking, while under-tensioned tendons reduce load-bearing capacity. These issues lead to uneven force distribution and maintenance challenges. Immediate remediation, regular inspections, and stringent quality control during construction are essential for long-term stability and reliability.",
            consequenceDescription: "Structure may not behave as designed and load carrying capacity may be affected. If a load assessment has been undertaken the results may not be reliable.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Honeycombing": {
            eventDescription: "Honeycombing in post-tensioned concrete creates voids and weak spots, reducing structural strength and load-bearing capacity. It exposes reinforcement to corrosion and disrupts force distribution, leading to potential damage and maintenance challenges. Immediate remediation, regular inspections, and stringent construction quality control are essential for long-term stability and reliability.",
            consequenceDescription: "Deterioration of the concrete reinforcement and result in a loss of structural capacity of the member. Honeycombed concrete also reduces the protection to the post-tensioning ducts.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Inspect the structure for signs of construction problems and identify the likely effect on the condition of the post-tensioning, if any, at the next Principal Inspection.",
            ]
        },
        "Failure To Maintain Water Management Systems": {
            eventDescription: "Failure to maintain water management systems indicates that water is not being drained correctly, which can result in unexpected water ingress into the structure. This, in turn, leads to the deterioration of various structural elements, including reinforcement, bearings, and post-tensioning components.",
            consequenceDescription: "Local deterioration (at an unknown rate) of the post-tensioning with potentially no loss of capacity or beam failure if the post-tensioned tendons are well grouted. Local deterioration (delamination, spalling and corrosion) to the concrete and reinforcement.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Ensure the installation and maintenance of watertight expansion joints and prioritise the replacement of the expansion joints when they fail.",
                "Monitor the watermanagement systems, such as carraigeway surfacing, drainage gullies and expansion joints on future routine inspections to identify potential areas that have failed and are allowing water to ingress."
            ]
        },
        "Changes In Highway Cross-Section": {
            eventDescription: "Changes in the highway cross-section for post-tensioned structures can cause uneven stress distribution, overloading, and alignment issues, compromising structural integrity and functionality. Careful planning, thorough analysis, and adherence to design specifications are crucial to maintain stability and reliability.",
            consequenceDescription: "Structure may not behave as designed and load carrying capacity may be affected. If a load assessment has been undertaken the results may not be reliable.",
            consequenceRating: "Low",
            riskManagementMeasures: [
                "Undertake a structural assessment to determine the current capacity of the structure.",
            ]
        },
        "Maintenance Actions Identified in Previous Inspection Reports Have Not Been Completed": {
            eventDescription: "Neglecting previously identified maintenance actions in post-tensioned structures can lead to severe consequences, including tendon deterioration, concrete degradation, safety risks, and increased repair costs.",
            consequenceDescription: "The extent and severity of any historic defects previously identified for maintenance actions may have deteriorated.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Ensure that any remedial works and/or maintenance actions are completed.",
            ]
        },
        "Changes In Loading": {
            eventDescription: "Changes in loading to a post-tensioned structure can lead to overstressing, cracks, and potential structural failures, while also causing operational inefficiencies. Careful evaluation, structural assessments, and preventive measures are essential to maintain long-term stability and reliability.",
            consequenceDescription: "Structure may not behave as designed and load carrying capacity may be inadequate. If a load assessment has been undertaken the results may not be reliable.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Undertake a structural assessment to determine the current capacity of the structure.",
            ]
        },
        "Use Of De-Icing Salts": {
            eventDescription: "De-icing salts are commonly employed as part of routine winter maintenance to enhance road safety. However, it is important to note that de-icing salts contain chlorides, and when these salts dissolve in water, they can penetrate the structure, accelerating the corrosion rate of reinforcement and post-tensioned tendons through chloride-induced pitting corrosion.",
            consequenceDescription: "(Longitudinal PT) Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure. (Transverse PT) Deterioration of the transverse post-tensioning system with potentially no loss of capacity or structural element failure if the post-tensioning tendons are well grouted.",
            consequenceRating: "High (Longitudinal PT) // Medium (Transverse PT)",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
                "Rectify all drainage and water management problems to prevent water and chlorides contaminating the bridge deck components."
            ]
        },
        "Proximity To Chemical Works": {
            eventDescription: "Proximity to chemical works poses corrosion risks to post-tensioned structures, threatening structural integrity and functionality. Proactive protection measures and regular maintenance are crucial for long-term stability and reliability.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Proximity To the Sea": {
            eventDescription: "When a structure is located near a coast, there is a potential for salts from the sea water to be carried by the wind onto the surface of the structure. These salt deposits can gradually penetrate the structure's surface, leading to an increased rate of deterioration, especially affecting the reinforced and post-tensioned elements.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
                "Monitor the structure for signs of water ingress at future routine inspections."
            ]
        },
        "Inadequate Principal/General/Special Inspections": {
            eventDescription: "Inadequate inspection of a post-tensioned structure jeopardises both structural integrity and functionality. Undetected defects like corrosion or grouting problems can weaken the structure, leading to failures or reduced performance. Thorough and regular inspections, along with preventive measures, are essential for ensuring safety and reliability over time.",
            consequenceDescription: "The extent and severity of historic defects may have changed, and new defects may have occurred but not been reported.",
            consequenceRating: "Medium",
            riskManagementMeasures: [
                "Undertake a full, touching distance, examination of every element of the structure in the future Principal Inspections.",
            ]
        },
        "No Previous PTSI": {
            eventDescription: "The condition of the bridge’s post-tensioning systems needs to be known with confidence. Inadequate condition investigations may result in deterioration of the system not being detected. Over time, chlorides and sulfates could adversely affect the condition of the grout, tendons and end anchorages. Water, chlorides and sulfates penetrate the tendons or anchorages and cause deterioration of the grout and corrosion of the post-tensioning system.",
            consequenceDescription: "Deterioration of the post-tensioning system occurs undetected, leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Previous PTSI Was Incomplete/Inadequate": {
            eventDescription: "When previous Post-Tensioned Structural Inspection (PTSI) investigations have been incomplete or inadequate, it hinders the ability to accurately determine the current condition of the post-tensioning system. A comprehensive and thorough PTSI is crucial in assessing the health, performance, and integrity of the post-tensioned elements within a structure.",
            consequenceDescription: "(Longitudinal PT) Deterioration of the post-tensioning system occurs undetected, leading to loss of capacity and eventual structural failure. (Transverse PT) Deterioration of the transverse post-tensioning system with potentially no loss of capacity or structural element failure if the post-tensioning tendons are well grouted.",
            consequenceRating: "High (Longitudinal PT) // Medium (Transverse PT)",
            riskManagementMeasures: [
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Recommendations From Previous PTSI Have Not Been Implemented": {
            eventDescription: "If recommendations from a previous Post-Tensioned Structural Inspection (PTSI) have not been implemented, it increases the risk that the target elements may have deteriorated. Recommendations from a PTSI are typically made to address identified issues, mitigate risks, and ensure the ongoing integrity and performance of the post-tensioned elements within a structure.",
            consequenceDescription: "Deterioration of the post-tensioning system leading to loss of capacity and eventual structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "Ensure that remedial works and maintenance actions are completed.",
            ]
        },
    },


    
    "Assessment Hazards": {
        "Structure Has Not Been Assessed for Current Condition, Assessment Standards or Operation Loading": {
            eventDescription: "If a structure has not been assessed for its current condition, assessment standards, or operational loading, there is a possibility that the design and capacity of the structure may not be suitable for today's operations. Assessing the structure's current condition, comparing it to the relevant assessment standards, and considering the intended operational loading are essential steps in ensuring the structure's safety and adequacy.",
            consequenceDescription: "Should deterioration be discovered there would be a delay in determining the effect on the structure.",
            consequenceRating: "Low",
            riskManagementMeasures: [
                "Undertake a structural assessment to determine the current capacity of the structure.",
            ]
        },
        "Structure Has Been Assessed as Substandard": {
            eventDescription: "When a post-tensioned structure is assessed as substandard, it faces significant risks of failure, reduced load-bearing capacity, and operational inefficiencies. Immediate remediation, such as repairs or strengthening, along with regular monitoring and preventive measures, are essential to ensure long-term safety and reliability.",
            consequenceDescription: "Capacity of structure is reduced and increased loading may result in structural failure.",
            consequenceRating: "High",
            riskManagementMeasures: [
                "As and when there is significant deterioration found, submit a Structural Review Form",
                "Undertake further PTSI Site Investigations to determine the current condition of the post-tensioning system.",
            ]
        },
        "Structure Has Not Been Assessed for Sensitivity to Loss of Prestress": {
            eventDescription: "If a structure has not undergone an assessment for sensitivity to loss of prestress, it becomes difficult to determine the current capacity compared to the designed capacity. The sensitivity to loss of prestress refers to how the structure's performance and load-carrying capacity are affected when there is a reduction in the level of prestress in the post-tensioned elements.",
            consequenceDescription: "Should deterioration be discovered, there would be a delay in determining the effect on the structure.",
            consequenceRating: "Low",
            riskManagementMeasures: [
                "As and when there is significant deterioration found, submit a Structural Review Form",
            ]
        },
        "Assessment Has Not Identified and Considered All Possible Failure Modes": {
            eventDescription: "If an assessment has not identified all possible failure modes of a structure, there will be a delay in understanding how the structure may fail and at what rate. Failure modes refer to the various ways in which a structure can experience degradation, damage, or structural failure.",
            consequenceDescription: "Should deterioration be discovered, there would be a delay in determining the effect on the structure.",
            consequenceRating: "Low",
            riskManagementMeasures: [
                "As and when there is significant deterioration found, submit a Structural Review Form",
            ]
        }, 
    },
};

    // "Hazard Category": {
        // "Hazard Name": {
        //     eventDescription: "",
        //     consequenceDescription: "",
        //     consequenceRating: "",
        //     riskManagementMeasures: [
        //         "",
        //     ]
        // }
    // },